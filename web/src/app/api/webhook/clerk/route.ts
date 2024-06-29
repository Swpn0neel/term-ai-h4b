import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createHmac } from "crypto";
import axios from "axios";
import { apiRoute } from "@/lib/utils";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    const WHSEC = process.env.CLERK_WEBHOOK_SECRET_KEY;

    if (!WHSEC) {
        throw new Error(
            "webhook: invalid webhook secret (check CLERK_WEBHOOK_SECRET_KEY env variable)",
        );
    }

    // Get the headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response("webhook: no svix headers", {
            status: 400,
        });
    }

    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload)
    const signedContent = `${svix_id}.${svix_timestamp}.${body}`;

    // Need to base64 decode the secret
    const secretBytes = Buffer.from(WHSEC.split("_")[1], "base64");
    const signature = createHmac("sha256", secretBytes)
        .update(signedContent)
        .digest("base64");

    if (svix_signature.replace("v1,", "") !== signature) {
        const message = "webhook: no matching signature found";
        console.error(message);
        return NextResponse.json(message, { status: 400 });
    }

    const evt = payload as WebhookEvent;
    const eventType = evt.type;
    const { id } = evt.data

    console.log("evt");
    console.log(evt)

    let primaryEmail;
    let name;
    if (eventType == "user.created" || eventType == "user.updated") {
        primaryEmail = evt.data.email_addresses.find(
            (value) => value.id === evt.data.primary_email_address_id,
        )?.email_address;
        name = evt.data.first_name + " " + evt.data.last_name
    }

    switch (eventType) {
        case "user.created":
            await prisma.user.create({
                data: {
                    name,
                    email: primaryEmail as string,
                    ghUsername: evt.data.external_accounts[0].username as string,
                    userId: id as string,
                }
            })
            break;

        case "user.updated":
            await prisma.user.update({
                where: { userId: id },
                data: {
                    name,
                    email: primaryEmail as string,
                    ghUsername: evt.data.external_accounts[0].username as string,
                    userId: id as string,
                }
            })
            break;

        case "user.deleted":
            await prisma.user.delete({ where: { userId: id } })
            break;
    }

    return new NextResponse("success", { status: 201 });
}
