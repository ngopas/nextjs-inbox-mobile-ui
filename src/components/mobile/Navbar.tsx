import { HiInboxArrowDown } from 'react-icons/hi2';
import { FaPaperPlane } from 'react-icons/fa';
import { MdPostAdd, MdSettings } from 'react-icons/md';
import { GoCalendar } from 'react-icons/go';

const Navbar = () => {
  return (
    <div
      className="
        bg-gray-200
        h-16
      "
    >
      <div className="grid grid-cols-5">
        <div
          className="
            flex flex-col
            items-center justify-between
            m-2
          "
        >
          <HiInboxArrowDown size={24} />
          <div>Inbox</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
