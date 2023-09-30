"use client";
import Image from "next/image";
import { useEffect } from "react";

interface Props {
    screenshotPath: string;
    size: number;
    alt: string;
}

const ImageGallery: React.FC<Props> = ({ screenshotPath, size, alt }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/js/fslightbox.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <a
            className="relative h-0 w-full rounded-md bg-black pb-[56.25%]"
            data-fslightbox="gallery"
            href={screenshotPath}
        >
            <Image
                className="absolute inset-0 h-full w-full rounded-md object-contain"
                src={screenshotPath}
                width={size}
                height={size}
                alt={alt}
            />
        </a>
    );
};

export default ImageGallery;
