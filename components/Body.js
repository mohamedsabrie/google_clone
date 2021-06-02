import {  SearchIcon } from '@heroicons/react/outline';
import { MicrophoneIcon} from '@heroicons/react/solid';
import {useRouter} from 'next/router'

import Image from 'next/image'
import { useRef } from 'react';
function Body() {
    const router = useRouter();
    const inputRef = useRef(null);
    const searchHandler =(e)=>{
      e.preventDefault();
      const term = inputRef.current.value;
      if(!term) return ;
      router.push(`search?term=${term}`)
    }

    return (
        <form className="flex  flex-col items-center flex-grow mt-44 mx-5 ">
            <Image
            src="/google-logo.png"
            height={100}
            width={300}
            />
            <div className="flex w-full items-center border rounded-full mt-5 px-5 py-3  hover:shadow-lg focus-within:shadow-lg max-w-md  sm:max-w-xl md:max-w-2xl">
                <SearchIcon onClick ={searchHandler} className="h-5 mr-3 text-gray-500 cursor-pointer" />
                <input type="text" className=" flex-grow focus:outline-none" ref={inputRef} />
                <MicrophoneIcon className="h-5" />
            </div>
            <div className="flex flex-col mt-8 w-1/2 space-y-2 sm:space-y-0 sm:flex-row justify-center sm:space-x-4 ">
                <button onClick ={searchHandler} className="btn">Google Search</button>
                <button onClick ={searchHandler} className="btn">I am Feeling Lucky</button>
            </div>
        </form>
    )
}

export default Body
