import ArrowRight from '@/../../public/icons/arrow_right.svg'
import Image from 'next/image'

export function NextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
         <Image className={className} style={{...style, display: "block"}} onClick={onClick} src={ArrowRight} alt="Arrow Right" />
    )
}