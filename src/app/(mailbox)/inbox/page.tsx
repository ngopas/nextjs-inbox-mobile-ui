import MailContent from '@/components/MailContent';
import NavbarMobile from '@/components/mobile/Navbar';

const Inbox = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-200 ">top</div>
      <div className="grow overflow-y-auto">
        <MailContent />
      </div>
      <footer className="bg-gray-300">
        <NavbarMobile />
      </footer>
    </div>
  );
};

export default Inbox;
