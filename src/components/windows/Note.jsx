import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MacWindow from "./MacWindow";
import "./note.scss"

const Note = () => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <MacWindow>
      <div className="note_window">
        {markdown ? <SyntaxHighlighter language="typescript">{markdown}</SyntaxHighlighter> : <p>Loding...</p>}
      </div>
    </MacWindow>
  );
};

export default Note;
