import { useState } from "react";
import Message from "./Message";

/**
 * @param theme `light` or `dark`, adaptive on default
 * @param position `right` or `left`, center on default
 * @param title `title text` , chat on default
 */
export default function Chat(props) {
  const { theme, position, title } = props;
  const [open, setOpen] = useState(false);
  const [messages, setMeessages] = useState([]);
  const [current, setCurrent] = useState("");

  const titleText = title ? title : "chat";

  return (
    <section
      className={[
        "chat",
        position === "left" && "chat-left",
        position === "right" && "chat-right",
        position === undefined && "chat-center",
        theme === "light" && "chat-light",
        theme === "dark" && "chat-dark",
        theme === undefined && "chat-adaptive",
        !open && "chat-closed",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button className="chat-title" onClick={() => setOpen(!open)}>
        {titleText}
      </button>
      <div className="main">
        {messages.map((message, i) => (
          <Message key={i} content={message} sent={i % 2} />
        ))}
      </div>
      <form
        className="input-container"
        onSubmit={(event) => {
          event.preventDefault();
          if (!current) return;
          setMeessages((old) => [...old, current]);
          setCurrent("");
        }}
      >
        <input
          className="text"
          placeholder="type..."
          onInput={(event) => setCurrent(event.target.value)}
          value={current}
        />
        <button className="enter">ENTER</button>
      </form>
    </section>
  );
}
