const mail = {
  from: 'sender',
  subject: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  opened: false,
  forwarded: true,
  replied: true,
};

const MailContent = () => {
  return (
    <div className="flex flex-col m-2">
      {Array.from(Array(100), (e, i) => {
        return (
          <a key={i} className="block border-b-2">
            <p className="line-clamp-2">{mail.subject}</p>
          </a>
        );
      })}
    </div>
  );
};

export default MailContent;
