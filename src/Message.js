export default function Message(props) {
  const { sent } = props;
  return (
    <div className={(sent ? "message-sent" : "message-received") + " message"}>
      {props.content}
    </div>
  );
}
