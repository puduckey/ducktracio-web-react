"use client";
import Image from "next/image";
import Game from "./Game";
import { useEffect, useState } from "react";

export interface Game {
    id: string;
    title: string;
    description: string;
    status: string;
    release: string;
    android: boolean;
    windows: boolean;
    linux: boolean;
    genre: string;
    playerCount: string;
    langEs: boolean;
    langEn: boolean;
    urls: {
        page: string;
        playstore: string;
        itch: string;
    };
    imagesPath: {
        cover: string;
    };
}
interface Data {
    games: Game[];
}

const GameList = () => {
    const [data, setData] = useState<Data | null>(null);
    useEffect(() => {
        const jsonPath = "/gamesInfo.json";

        fetch(jsonPath)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error:", error));
    }, []);

    if (!data) {
        return (
            <div className="m-96">
                <p className="text-center">Loading...</p>
            </div>
        );
    }
    return (
        <div className="bg-white">
            <div className="grid grid-cols-12">
                <div className="col-span-12 px-10 py-2 xl:col-span-9 ">
                    <h1 className="text-center text-xl font-bold">Games</h1>
                    {data.games.map((game) => (
                        <Game
                            key={game.id}
                            title={game.title}
                            description={game.description}
                            imagePath={game.imagesPath.cover}
                            imageAlt={game.title + ` game by Ducktracio`}
                            id={game.id}
                            playstoreUrl={game.urls.playstore}
                            itchUrl={game.urls.itch}
                        />
                    ))}
                </div>
                <div className="invisible col-span-3 mx-24 xl:visible">
                    <Image
                        src="/img/logos/cable.png"
                        width={500}
                        height={500}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default GameList;
