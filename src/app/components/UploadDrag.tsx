import Image from "next/image";

import upIcon from '@/../../public/icons/up_ico.svg'


export function UploadDrag() {


    return (
                <div className="absolute z-50 top-0 right-0 left-0 bottom-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white gap-2" >
                    <Image src={upIcon} alt="Upload" />
                    <p className="md:text-xl">Drag here to upload</p>
                    <p className="md:text-xl">PNG or JPG (max. 800x400px)</p>

                </div>
    )
}