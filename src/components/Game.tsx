import Image from "next/image";
import Link from "next/link";

interface GameSummary {
    title: string;
    description: string;
    imagePath: string;
    imageAlt: string;
    playstoreUrl: string;
    itchUrl: string;
    url: string;
}

const Game = ({
    title,
    description,
    imagePath,
    imageAlt,
    playstoreUrl,
    itchUrl,
    url,
}: GameSummary) => {
    return (
        <div className="my-3 rounded-md p-3 hover:bg-gray-300">
            <div className="grid grid-cols-4">
                <div className="col-span-4 flex items-center justify-center md:col-span-1">
                    <Link href={url}>
                        <Image
                            className="h-auto w-full rounded-md"
                            src={imagePath}
                            width="0"
                            height="0"
                            sizes="100vw"
                            alt={imageAlt}
                        />
                    </Link>
                </div>
                <div className="col-span-4 px-3 md:col-span-3">
                    <Link href={url}>
                        <h1 className="text-center text-lg">{title}</h1>
                        <p className="text-justify text-sm text-gray-600">
                            {description}
                        </p>
                    </Link>
                    <div className="my-4 flex items-center justify-around">
                        {playstoreUrl && (
                            <Link href={playstoreUrl}>
                                <Image
                                    src="/img/games/playstore.png"
                                    width={200}
                                    height={0}
                                    alt=""
                                />
                            </Link>
                        )}
                        {itchUrl && (
                            <Link href={itchUrl}>
                                <Image
                                    src="/img/games/itchio.png"
                                    width={200}
                                    height={0}
                                    alt=""
                                />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
