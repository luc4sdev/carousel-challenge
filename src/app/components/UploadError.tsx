import ErrorIcon from '@/../../public/icons/Error_Ico.svg'
import Image from 'next/image'
import Link from 'next/link'

interface UploadErrorProps {
    setError: (error: boolean) => void;
}

export function UploadError({ setError } : UploadErrorProps) {
    return (
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white gap-2">
            <Image src={ErrorIcon} alt="Error" />
            <p className="text-2xl">Failed to upload</p>
            <p className="w-1/5 text-lg font-light text-center">Please check if the image has the right size and extension and <button type='button' onClick={() => setError(false)}  className='underline decoration-1 font-semibold'>try again</button></p>
        </div>
    )
}