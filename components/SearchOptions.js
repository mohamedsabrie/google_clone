import { DotsVerticalIcon, LocationMarkerIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from "@heroicons/react/outline";
import SearchOption from "./SearchOption";

function SearchOptions() {
    return (
        <div className="flex w-full justify-evenly lg:justify-start lg:space-x-36 border-b lg:pl-52 text-gray-700 text-sm lg:text-base">
            {/* left Side */}

            <div className='flex space-x-6'>
                <SearchOption Icon={SearchIcon} title="All" selected />
                <SearchOption Icon={PhotographIcon} title="Images" />
                <SearchOption Icon={PlayIcon} title="Videos" />
                <SearchOption Icon={LocationMarkerIcon} title="Maps" />
                <SearchOption Icon={NewspaperIcon} title="News" />
                <SearchOption Icon={DotsVerticalIcon} title="More" />
            </div>

            {/* right side  */}
            <div className="flex space-x-6">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
            
        </div>
    )
}

export default SearchOptions
