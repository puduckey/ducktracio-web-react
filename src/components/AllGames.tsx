"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Game } from "./GameList";
import Link from "next/link";
import getTranslations from "@/getTranslations";

interface Data {
    games: Game[];
}

interface Props {
    language: string;
}

const AllGames: FC<Props> = ({ language }) => {
    const localization = getTranslations(language);

    let url = "/games/";
    if (language !== "en") url = "/" + language + url;

    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        let jsonPath = "/locales";

        if (language === "en") jsonPath += "/gamesInfo_en.json";
        else jsonPath += "/gamesInfo_es.json";

        fetch(jsonPath)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error:", error));
    });

    if (!data) {
        return (
            <div className="m-96">
                <p className="text-center">{localization.loading + "..."}</p>
            </div>
        );
    }

    return (
        <div className="bg-black">
            <h1 className="mb-3 text-center text-xl text-white">
                {localization.all_games}
            </h1>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
                {data.games.map((game) => (
                    <Link key={game.id} href={url + game.id}>
                        <Image
                            key={game.id}
                            src={game.imagesPath.cover}
                            width={300}
                            height={300}
                            alt={game.title + " game by Ducktracio"}
                            className="rounded-md p-1 hover:bg-gray-600"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllGames;
