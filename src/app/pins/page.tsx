'use client'
import Dummy from '../../../components/Dummy'
import Image from "next/image";
import { FaInstagram, FaPinterest } from "react-icons/fa";

export default function Pins() {
    return (
        <Dummy comp={<>
        <h1 className="text-3xl lg:text-4xl font-bold text-center lg:mb-5">Pins</h1>
        <Pin/></>}/>
    );
}

function Pin(){
    const images = [
        { src: "/pins/1.jpeg", alt: "Beautiful sunset", insta: "#", pinterest: "#" },
        { src: "/pins/2.jpeg", alt: "Mountain landscape", insta: "#", pinterest: "#" },
        { src: "/pins/3.jpeg", alt: "City skyline at night", insta: "#", pinterest: "#" },
        { src: "/pins/4.jpeg", alt: "Serene beach view", insta: "#", pinterest: "#" },
        { src: "/pins/5.jpeg", alt: "Lush green forest", insta: "#", pinterest: "#" },
        { src: "/pins/6.jpeg", alt: "Snow-covered peaks", insta: "#", pinterest: "#" },
        { src: "/pins/7.jpeg", alt: "Vibrant autumn leaves", insta: "#", pinterest: "#" },
        { src: "/pins/8.jpeg", alt: "Starry night sky", insta: "#", pinterest: "#" },
        { src: "/pins/9.jpeg", alt: "Calm lake reflection", insta: "#", pinterest: "#" },
        { src: "/pins/10.jpeg", alt: "Calm lake reflection", insta: "#", pinterest: "#" },
        { src: "/pins/11.jpeg", alt: "Calm lake reflection", insta: "#", pinterest: "#" },
        { src: "/pins/12.jpeg", alt: "Calm lake reflection", insta: "#", pinterest: "#" },
      ];
    return(
        <div className="gap-8 columns-3 columns-3xs px-6">
        {images.map(({ src, alt, insta, pinterest }, index) => (
            <div key={index} className="relative group">
            <Image className="w-full my-10 rounded-xl" src={src} alt={alt} width={100} height={100} priority unoptimized={true}/>
            
            {/* Social Icons - Show on Hover */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href={insta} target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-pink-500">
                <FaInstagram />
                </a>
                <a href={pinterest} target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-red-500">
                <FaPinterest />
                </a>
            </div>
            </div>
        ))}
        </div>
    );
}