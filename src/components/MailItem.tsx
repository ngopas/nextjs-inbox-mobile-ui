import { TiArrowForward, TiArrowBack } from 'react-icons/ti';

const subject = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
const selected = false;
const MailItem = () => {
  return (
    <a className="block border-b-2">
      <div
        className={`
          p-2 md:border-l-2 
          ${selected ? 'border-blue-400' : 'border-transparent'}
      `}
      >
        <div className="flex flex-row">
          <TiArrowForward className="flex-none" />
          <p className="line-clamp-2">{subject}</p>
        </div>
      </div>
    </a>
  );
};

export default MailItem;
