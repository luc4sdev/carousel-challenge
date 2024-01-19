import Image from 'next/image'

import errorIcon from '@/../../public/icons/error_Ico.svg'
import arrowLeft from '@/../../public/icons/arrow_left.svg'
import arrowRight from '@/../../public/icons/arrow_right.svg'

interface UploadErrorProps {
    setError: (error: boolean) => void;
}

export function UploadError({ setError }: UploadErrorProps) {
    return (
        <div className='w-3/4 flex justify-center items-center gap-3'>
            <Image src={arrowLeft} alt="Arrow Left" />
            <div className="w-full h-56 flex flex-col justify-center items-center border-dashed border-2 rounded-xl border-gray-400 bg-white relative" >
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white gap-2">
                    <Image src={errorIcon} className='w-[10%] md:w-[50px]' alt="Error" />
                    <p className="md:text-2xl">Failed to upload</p>
                    <p className="xl:w-1/5 text-lg font-light text-center">Please check if the image has the right size and extension and <button type='button' onClick={() => setError(false)} className='underline decoration-1 font-semibold'>try again</button></p>
                </div>
            </div>
            <Image src={arrowRight} alt="Arrow Right" />
        </div>
    )
}