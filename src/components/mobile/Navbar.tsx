import { HiInboxArrowDown } from 'react-icons/hi2';
import { FaPaperPlane } from 'react-icons/fa';
import { MdPostAdd, MdSettings } from 'react-icons/md';
import { GoCalendar } from 'react-icons/go';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <div
      className="
        bg-gray-200
        h-16
      "
    >
      <div className="grid grid-cols-5">
        <NavbarItem icon={HiInboxArrowDown} label={'Inbox'} />
      </div>
    </div>
  );
};

export default Navbar;
