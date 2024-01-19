import Image from "next/image";
import { useDropzone } from "react-dropzone";

import btnArrow from '@/../../public/icons/btn_arrow.svg'
import arrowLeft from '@/../../public/icons/arrow_left.svg'
import arrowRight from '@/../../public/icons/arrow_right.svg'
import { UploadDrag } from "./UploadDrag";

interface UploadInitialProps {
    onDrop: (acceptedFiles: any, rejectedFiles: any) => void;
}


export function UploadInitial({ onDrop }: UploadInitialProps) {

    const {
        isDragActive,
        getRootProps,
        getInputProps,
    } = useDropzone({
        onDrop, accept: {
            'image/jpeg': [],
            'image/png': []
        }
        ,
        multiple: false,
    });


    return (
        <div className='w-3/4 flex justify-center items-center gap-3' {...getRootProps()}>
            <Image src={arrowLeft} alt="Arrow Left" />
            <div className="w-full h-56 flex flex-col justify-center items-center border-dashed border-2 rounded-xl border-gray-400 bg-white relative">
                {isDragActive && (<UploadDrag />)}
                <button type="button" className="border-2 border-gray-300 rounded-full flex justify-center items-center font-semibold text-[#4977BA] gap-3 py-4 px-7">
                    <Image src={btnArrow} alt="Arrow" />
                    Click to upload
                </button>
                <p className="text-lg text-gray-400">or</p>
                <p className="text-lg">Drag and drop a file here</p>
                <input {...getInputProps()} />
            </div>
            <Image src={arrowRight} alt="Arrow Right" />
        </div>
    )
}