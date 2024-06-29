import { useEffect, useState, useCallback } from "react";
import Xterm from "@/components/xterm";
import { type Terminal as Xterminal } from "@xterm/xterm";
import { Socket } from "socket.io-client";

type ShellOut = { data: string };

export default function Terminal({ socket }: { socket: Socket }) {
  const [terminal, setTerminal] = useState<Xterminal | null>(null);

  const onInit = useCallback((term: Xterminal) => {
    setTerminal(term);
    term.reset();
  }, []);

  const onDispose = useCallback(() => {
    setTerminal(null);
  }, []);

  const onData = (data: string) => {
    if (!terminal) return;
    socket.emit("shell:input", { command: String(data) });
  };

  useEffect(() => {
    if (!terminal) return;

    socket.emit("shell:input", { command: "\r" });
    socket.on("shell:data", (message: ShellOut) => {
      console.log(message);
      if (!terminal) return;
      terminal.write(message.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terminal]);

  return (
    <div className="bg-slate-900 py-4">
      <Xterm
        className="mx-4"
        onInit={onInit}
        onDispose={onDispose}
        onData={onData}
        onResize={({ rows, cols }) => {
          console.log(rows, cols);
          socket.emit("shell:resize", { rows, cols });
        }}
      />
    </div>
  );
}
