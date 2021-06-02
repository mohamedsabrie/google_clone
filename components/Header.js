import Avatar from "./ui/Avatar";
import {ViewGridIcon} from '@heroicons/react/solid'

function Header() {
  return (
    <header className="flex justify-end  w-full  p-5 text-gray-700 ">
      {/* Left Side */}
      

      {/* Right Side */}
      <div className="flex  space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <ViewGridIcon className="h-10 cursor-pointer p-2 hover:bg-gray-100 rounded-full " />
        <Avatar url="/profile-pic.jpg" />

      </div>
    </header>
  );
}

export default Header;
