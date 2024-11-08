import Image from "next/image"

interface Props {$:string,size:number}

export default function Icon({$,size}:Props) {
    return <Image src={`/icons/${$}.svg`} alt="*" height={size} width={size} />
}