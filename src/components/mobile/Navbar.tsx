import { HiInboxArrowDown } from 'react-icons/hi2';
import { FaPaperPlane } from 'react-icons/fa';
import { MdPostAdd, MdSettings } from 'react-icons/md';
import { GoCalendar } from 'react-icons/go';
import NavbarItem from './NavbarItem';

const menu = [
  {
    label: 'Inbox',
    icon: HiInboxArrowDown,
    selected: true,
  },
  {
    label: 'Sent',
    icon: FaPaperPlane,
    selected: false,
  },
  {
    label: 'New',
    icon: MdPostAdd,
    selected: false,
  },
  {
    label: 'Calendar',
    icon: GoCalendar,
    selected: false,
  },
  {
    label: 'Settings',
    icon: MdSettings,
    selected: false,
  },
];

const Navbar = () => {
  return (
    <div
      className="
        bg-gray-200
      "
    >
      <div className="grid grid-cols-5">
        {menu.map((item) => (
          <NavbarItem
            icon={item.icon}
            label={item.label}
            selected={item.selected}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
