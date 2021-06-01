import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from "./ui/Avatar";
import SearchOptions from "./SearchOptions";

function SearchHeader() {
  const searchInputRef = useRef(null);

  const router = useRouter();

  const searchHandler = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky bg-white top-0">
      <div className="flex items-center p-6">
        <Image
          className="cursor-pointer"
          src="/google-logo.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
        />
        <form className=" flex flex-grow border max-w-3xl rounded-full px-6 py-3 ml-10 mr-5 shadow-lg">
          <input
            type="text"
            ref={searchInputRef}
            className=" flex-grow w-full focus:outline-none  "
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
          />
          <MicrophoneIcon className="h-6 cursor-pointer mr-3 hidden sm:inline-flex border-l-2 pl-4 text-blue-500 border-gray-300 " />
          <SearchIcon
            onClick={searchHandler}
            className="h-6 text-blue-500  cursor-pointer  hidden sm:inline-flex"
          />
          <button hidden onClick={searchHandler} type="submit">
            Search
          </button>
        </form>
         <Avatar className='ml-auto' url="/profile-pic.jpg" />
      </div>
      <div className="">
          <SearchOptions />
      </div>
    </header>

  );
}

export default SearchHeader;
