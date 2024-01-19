'use client'
import { useCallback, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useDropzone } from 'react-dropzone'
import { UploadError } from "./UploadError";

import btnArrow from '@/../../public/icons/btn_Arrow.svg'
import UpIcon from '@/../../public/icons/Up_ico.svg'
import ArrowLeft from '@/../../public/icons/arrow_left.svg'
import ArrowRight from '@/../../public/icons/arrow_right.svg'
import Plus from '@/../../public/icons/plus.svg'
import Delete from '@/../../public/icons/delete.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";





export function CarouselUploader() {

    const [selectedImages, setSelectedImages] = useState([]);
    const [error, setError] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);


    const onDrop = useCallback((acceptedFiles: any, rejectedFiles: any) => {
        acceptedFiles.forEach((file: any) => {


            if (file.type.startsWith('image/')) {

                const img = new (window as any).Image()
                img.src = URL.createObjectURL(file);

                img.onload = () => {
                    if (img.width && img.height && img.width <= 800 && img.height <= 800) {
                        setSelectedImages((prevState) => [...prevState, file]);
                    } else {
                        console.log('A imagem deve ter no máximo 800x800 pixels.');
                        setError(true)
                    }
                };

            } else {
                console.log('O arquivo não é uma imagem.');
                setError(true)
            }
        });
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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

    function handleShowDeleteButton(index:number) {
        setCurrentIndex(index)
        setShowDeleteButton(true)
    } 

    function deleteImage(index: number) {
       const aux = selectedImages.filter((image,i) => i !== index)
       setSelectedImages(aux)
    }

    return (
        <div className='w-3/4 flex justify-center items-center gap-3'>
            {selectedImages.length === 0 ? (
                <>
                    <Image src={ArrowLeft} alt="Arrow Left" />

                    <div className="w-full h-56 flex flex-col justify-center items-center border-dashed border-2 rounded-xl border-gray-400 bg-white relative" {...getRootProps()}>
                        {(!isDragActive && !error) && (
                            <>
                                <button type="button" className="border-2 border-gray-300 rounded-full flex justify-center items-center font-semibold text-[#4977BA] gap-3 py-4 px-7">
                                    <Image src={btnArrow} alt="Arrow" />
                                    Click to upload
                                </button>
                                <p className="text-lg text-gray-400">or</p>
                                <p className="text-lg">Drag and drop a file here</p>
                            </>
                        )}


                        {isDragActive && (
                            <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white gap-2">
                                <Image src={UpIcon} alt="Upload" />
                                <p className="text-xl">Drag here to upload</p>
                                <p className="text-xl">PNG or JPG (max. 800x400px)</p>
                            </div>
                        )}

                        {error && (
                            <UploadError setError={setError} />
                        )}
                        <input {...getInputProps()} />
                    </div>
                    <Image src={ArrowRight} alt="Arrow Right" />
                </>
            ) :
                <div className="w-full h-56 rounded-xl border-gray-400 bg-white" >
                    <Slider className="w-full h-full p-3" {...settings} >

                        <div {...getRootProps()}>
                            <div className="w-[200px] h-[200px] flex flex-col justify-center items-center rounded-lg bg-neutral-300 cursor-pointer hover:brightness-105">
                                <Image src={Plus} alt="Plus" />
                                <p className="text-xl text-center">Add new images</p>
                            </div>
                        </div>



                        {selectedImages.length > 0 &&
                            selectedImages.map((image, index) => (
                                <div key={index} className="relative">
                                    <Image src={`${URL.createObjectURL(image)}`} onMouseOver={() => handleShowDeleteButton(index)} onMouseOut={() => setShowDeleteButton(false)} width={200} height={200} className="rounded-lg max-w-[200px] max-h-[200px] hover:brightness-50" alt={`Image ${index}`} />

                                    {(showDeleteButton && currentIndex === index) && (
                                        <Image src={Delete} onClick={() => deleteImage(index)} onMouseOver={() => setShowDeleteButton(true)} onMouseOut={() => setShowDeleteButton(false)} className="absolute z-10 -top-2 right-36 cursor-pointer" alt="Delete" />
                                    )}

                                </div>
                            ))}


                    </Slider>

                    <input {...getInputProps()} />
                    {isDragActive && (
                        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white gap-2">
                            <Image src={UpIcon} alt="Upload" />
                            <p className="text-xl">Drag here to upload</p>
                            <p className="text-xl">PNG or JPG (max. 800x400px)</p>
                        </div>
                    )}

                    {error && (
                        <UploadError setError={setError} />
                    )}
                </div>
            }


        </div>
    )
}