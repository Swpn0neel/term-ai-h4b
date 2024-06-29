# syntax=docker/dockerfile:1

FROM node:20-slim AS base

SHELL ["/bin/bash", "-c"] 

RUN apt-get update \
    && apt-get install -y curl python3 g++ make \
    && apt-get -y autoclean

# Install nodejs.
# ENV NVM_VERSION=0.39.7
# ENV NODE_VERSION=20.13.1
# RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash
# ENV NVM_DIR=/root/.nvm
# RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
# RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
# RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
# ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

# Set up git.

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Install pnpm.
ENV PNPM_VERSION=9.4.0
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

FROM base AS build
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install

COPY . .

RUN pnpm run build
EXPOSE 3000

ENTRYPOINT [ "pnpm" ]
CMD [ "start" ]

# RUN pnpm run build

# # Create a stage for installing production dependecies.
# FROM base AS deps

# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
#     --mount=type=cache,target=/root/.local/share/pnpm/store \
#     pnpm install --prod

# # Create a stage for building the application.
# FROM deps AS build

# # Installing devDependencies.
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
#     --mount=type=cache,target=/root/.local/share/pnpm/store \
#     pnpm install

# # Copy the rest of the source files into the image.
# COPY . .
# RUN pnpm run build

# # New stage for running the application
# FROM base AS final
# USER node
# COPY package.json .

# # Copy the production dependencies from the deps stage and also
# # the built application from the build stage into the image.
# COPY --from=deps /usr/src/app/node_modules ./node_modules
# COPY --from=build /usr/src/app/dist ./dist

# Expose the port that the application listens on.
# EXPOSE 3000

# CMD pnpm start
