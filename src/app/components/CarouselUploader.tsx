'use client'

import { useCallback, useEffect, useState } from "react";
import { useDropzone } from 'react-dropzone'
import { UploadError } from "./UploadError";
import { UploadInitial } from "./UploadInitial";
import { UploadSlider } from "./UploadSlider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function CarouselUploader() {

    const [selectedImages, setSelectedImages] = useState<string[]>([])
    const [error, setError] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        setSelectedImages(JSON.parse(String(localStorage.getItem("selectedImages"))))
    }, [])

    useEffect(() => {
        try {
            localStorage.setItem("selectedImages", JSON.stringify(selectedImages));
            console.log("Saved to localStorage:", selectedImages);
        } catch (error) {
            console.error("Error saving to localStorage:", error);
        }
    }, [selectedImages]);

    const onDrop = useCallback((acceptedFiles: any, rejectedFiles: any) => {
        acceptedFiles.forEach((file: any) => {


            if (file.type.startsWith('image/')) {

                const img = new (window as any).Image()
                img.src = URL.createObjectURL(file);

                img.onload = () => {
                    if (img.width && img.height && img.width <= 800 && img.height <= 800) {
                        setSelectedImages((prevState) => [...prevState, img.src]);
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
    } = useDropzone({
        onDrop, accept: {
            'image/jpeg': [],
            'image/png': []
        }
        ,
        multiple: false,
    });




    function handleShowDeleteButton(index: number) {
        setCurrentIndex(index)
        setShowDeleteButton(true)
    }

    function deleteImage(index: number) {
        const aux = selectedImages.filter((image, i) => i !== index)
        setSelectedImages(aux)
    }

    return (
        <>
            {selectedImages.length === 0 ?
                (
                    <>
                        {error ? (
                            <UploadError setError={setError} />
                        )
                            :
                            (
                                <UploadInitial onDrop={onDrop} />
                            )

                        }

                    </>
                )
                :
                <>
                    {error ? (
                        <UploadError setError={setError} />
                    )
                        :
                        (
                            <UploadSlider onDrop={onDrop} selectedImages={selectedImages} showDeleteButton={showDeleteButton} setShowDeleteButton={setShowDeleteButton} currentIndex={currentIndex} handleShowDeleteButton={handleShowDeleteButton} deleteImage={deleteImage} />
                        )

                    }
                </>
            }
        </>
    )
}