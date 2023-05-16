import { IconType } from 'react-icons';

interface NavbarItemProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  return (
    <div
      className="
          flex flex-col
          items-center justify-between
          m-2
        "
    >
      <Icon
        size={24}
        className={`
          ${selected ? 'fill-blue-800' : 'fill-gray-500'}
      `}
      />
      <div
        className={`
          font-light text-xs
          ${selected ? 'text-blue-800' : 'text-gray-500'}  
        `}
      >
        {label}
      </div>
    </div>
  );
};

export default NavbarItem;
