const MailContent = () => {
  return (
    <div className="flex flex-col m-2">
      {Array.from(Array(100), (e, i) => {
        return <a key={i}>{i}</a>;
      })}
    </div>
  );
};

export default MailContent;
