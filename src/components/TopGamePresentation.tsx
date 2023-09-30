import Image from "next/image";
import { FC } from "react";

interface GamePresentation {
    logoPath: string;
    backgroundPath: string;
    title: string;
}

const TopGamePresentation: FC<GamePresentation> = ({
    logoPath,
    backgroundPath,
    title,
}) => {
    return (
        <div style={{ position: "relative" }}>
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backdropFilter: "blur(2px)", // Aplica el filtro de desenfoque
                    zIndex: 0,
                }}
            />
            <Image
                src={backgroundPath}
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                alt={title + " game background - Ducktracio"}
                style={{ zIndex: 0 }}
            />
            <Image
                src={logoPath}
                width={500}
                height={500}
                alt={title + " game logo - Ducktracio"}
                className="mx-auto my-auto h-auto w-1/3 md:w-1/4"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                }}
            />
        </div>
    );
};

export default TopGamePresentation;
