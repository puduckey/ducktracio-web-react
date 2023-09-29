import { Game } from "@/components/GameList";
import Link from "next/link";
import gamesInfo from "../../../../public/gamesInfo.json";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const GameInfo = ({ params }: { params: { id: string } }) => {
    const game: Game | undefined = gamesInfo.games.find(
        (game: { id: string }) => game.id === params.id
    );

    if (!game) {
        return (
            <div className="text-center">
                <Navbar />
                <p className="my-3">Game not found!</p>
                <Link
                    href={"/"}
                    className="rounded-md bg-black p-2 text-white hover:bg-pink-400"
                >
                    Return to home
                </Link>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <p>ID: #{params.id}</p>
            <p>title: {game.title}</p>
            <Image
                src={game.imagesPath.cover}
                width={250}
                height={250}
                alt={game.title + " game by Ducktracio"}
            />
        </>
    );
};

export default GameInfo;
