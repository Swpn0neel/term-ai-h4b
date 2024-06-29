import { useEffect, useState, useCallback } from "react";
import Xterm from "@/components/xterm";
import { type Terminal as Xterminal } from "@xterm/xterm";
import { Socket } from "socket.io-client";
import React from "react";

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

  const aiHelp = [
    { command: ":ai", description: "Ask ai anything." },
    { command: ":ai -t <task>", description: "Based on the prompt, generates commands that directly executes in the terminal" },
    { command: ":ai -f <file>", description: "Provide a file path to include its content as context." },
    { command: ":ai -d <dir>", description: "Provide a directory path to include all files as context" },
    { command: ":ai -c", description: "Starts an context-based interactive chat window (type \"exit\" to exit)" },
  ];

  return (
    <div className="mt-4 bg-[#d9d9d920] py-1">
      <Xterm
        className="mx-1"
        onInit={onInit}
        onDispose={onDispose}
        onData={onData}
        socket={socket}
      // onResize={({ rows, cols }) => {
      //   console.log(rows, cols);
      //   socket.emit("shell:resize", { rows, cols });
      // }}
      />
      <div className="w-full p-4">
        <p>Quick Tips:</p>
        <p className="text-sm">• Type <b><i>nvim</i></b> to use neovim.</p>
        {aiHelp.map((item, index) => <React.Fragment key={index}>
          <p className="text-sm">• <b><i>{item.command}</i></b> - {item.description}</p>
          </React.Fragment>)}
      </div>
    </div>
  );
}
