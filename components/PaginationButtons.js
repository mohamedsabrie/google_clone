import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import {useRouter} from 'next/router';
import Link from 'next/link';

function PaginationButtons() {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;

    return (
        <divc className="flex justify-between text-blue-700 max-w-lg mb-10">
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                <div className="flex flex-col items-center  flex-grow hover:underline cursor-pointer">
                   <ChevronLeftIcon className="h-5" /> 
                   <p>Previous</p>
                </div>
                </Link>
               
            )}
             <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className="flex flex-col items-center  flex-grow hover:underline cursor-pointer">
                   <ChevronRightIcon className="h-5" /> 
                   <p>Next</p>
                </div>
                </Link>
            
        </divc>
    )
}

export default PaginationButtons
