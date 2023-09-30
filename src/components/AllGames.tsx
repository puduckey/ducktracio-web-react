"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Game } from "./GameList";
import Link from "next/link";

interface Data {
    games: Game[];
}

const AllGames = () => {
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
        <div className="bg-black">
            <h1 className="mb-3 text-center text-xl text-white">All games</h1>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
                {data.games.map((game) => (
                    <Link key={game.id} href={"/games/" + game.id}>
                        <Image
                            key={game.id}
                            src={game.imagesPath.cover}
                            width={300}
                            height={300}
                            alt=""
                            className="rounded-md p-1 hover:bg-gray-600"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllGames;
