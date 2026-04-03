function MessageBubble({ message }) {
  return (
    <div className={`message-row ${message.sent ? 'sent' : 'received'}`}>
      <div className={`message-bubble ${message.sent ? 'sent' : 'received'}`}>
        <p>{message.text}</p>
        <span>{message.time}</span>
      </div>
    </div>
  )
}

export default MessageBubble