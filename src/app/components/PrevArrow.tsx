import ArrowLeft from '@/../../public/icons/arrow_left.svg'
import Image from 'next/image'

export function PrevArrow(props: any) {
    const { className, style, onClick } = props;

    return (
     
            <Image className={className} style={{ ...style, display: "block" }} onClick={onClick} src={ArrowLeft} alt="Arrow Left" />
       
    )
}