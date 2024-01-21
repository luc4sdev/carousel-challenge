import Slider from "react-slick";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

import plus from '@/../../public/icons/plus.svg'
import deleteImg from '@/../../public/icons/delete.svg'
import { UploadDrag } from "./UploadDrag";


export interface UploadSliderProps {
    onDrop: (acceptedFiles: any, rejectedFiles: any) => void;
    selectedImages: string[];
    showDeleteButton: boolean;
    setShowDeleteButton: (showDeleteButton: boolean) => void;
    currentIndex: number;
    handleShowDeleteButton: (index: number) => void;
    deleteImage: (index: number) => void;
}

export function UploadSlider({ onDrop, selectedImages, showDeleteButton, setShowDeleteButton, currentIndex, handleShowDeleteButton, deleteImage }: UploadSliderProps) {


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

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        variableWidth: true,
        width: '250px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='w-3/4 flex justify-center items-center gap-3' >


            <div className="w-full h-56 rounded-xl border border-gray-400 bg-white relative"  >
                {isDragActive && (<UploadDrag />)}
                <Slider className="w-full h-full p-3 min-w-[200px]" {...settings} >

                    <div className="min-w-[200px]" {...getRootProps()}>
                        <div className="w-[200px] h-[200px] flex flex-col justify-center items-center rounded-lg bg-neutral-300 cursor-pointer hover:brightness-105">
                            <Image src={plus} alt="Plus" />
                            <p className="text-xl text-center">Add new images</p>
                        </div>
                    </div>

                    {selectedImages.length > 0 &&
                        selectedImages.map((image, index) => (
                            <div key={index} className="relative" {...getInputProps()}>
                                <Image src={image} onMouseOver={() => handleShowDeleteButton(index)} onMouseOut={() => setShowDeleteButton(false)} width={200} height={200} className="rounded-lg max-w-[200px] max-h-[200px] hover:brightness-50" alt={`Image ${index}`} />

                                {(showDeleteButton && currentIndex === index) && (
                                    <Image src={deleteImg} onClick={() => deleteImage(index)} onMouseOver={() => setShowDeleteButton(true)} onMouseOut={() => setShowDeleteButton(false)} className="absolute z-10 top-0 right-10 cursor-pointer" alt="Delete" />
                                )}

                            </div>
                        ))}
                </Slider>



            </div>
        </div>
    )
}