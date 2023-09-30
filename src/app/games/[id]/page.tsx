import { Game } from "@/components/GameList";
import Link from "next/link";
import gamesInfo from "../../../../public/gamesInfo.json";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import TopGamePresentation from "@/components/TopGamePresentation";
import ImageGallery from "@/components/ImageGallery";
import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";
import AllGames from "@/components/AllGames";

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
            <TopGamePresentation
                logoPath={game.imagesPath.logo}
                backgroundPath={game.imagesPath.background}
                title={game.title}
            />
            <div className="mx-5 mt-2 xl:mx-52">
                <p>{game.description}</p>
                <div className="my-4 flex items-center justify-around">
                    {game.urls.playstore && (
                        <Link href={game.urls.playstore}>
                            <Image
                                src="/img/games/playstore.png"
                                width={200}
                                height={0}
                                alt=""
                            />
                        </Link>
                    )}
                    {game.urls.itch && (
                        <Link href={game.urls.itch}>
                            <Image
                                src="/img/games/itchio.png"
                                width={200}
                                height={0}
                                alt=""
                            />
                        </Link>
                    )}
                </div>
                <h1 className="text-xl">Information</h1>
                <ul className="ml-5">
                    <li>
                        <b>Status: </b>
                        {game.status}
                    </li>
                    <li>
                        <b>Release: </b>
                        {game.release}
                    </li>
                    <li>
                        <b>Platforms: </b>
                        {game.platforms}
                    </li>
                    <li>
                        <b>Genre: </b>
                        {game.genre}
                    </li>
                    <li>
                        <b>Player count: </b>
                        {game.playerCount}
                    </li>
                    <li>
                        <b>Languages: </b>
                        {game.lang}
                    </li>
                </ul>
                <div className="flex justify-center">
                    <Image
                        src={game.imagesPath.groupPortrait}
                        width={500}
                        height={500}
                        alt={game.title + " game characters"}
                    />
                </div>

                {game.urls.trailer ? (
                    <>
                        <h1 className="text-xl">Trailer</h1>
                        <div className="mb-3 flex justify-center">
                            <iframe
                                width="560"
                                height="315"
                                src={game.urls.trailer}
                                title="Video de YouTube"
                            ></iframe>
                        </div>
                    </>
                ) : (
                    ""
                )}

                <h1 className="text-xl">Screenshots</h1>
                <div className="my-3 grid grid-cols-1 place-items-center gap-3 sm:grid-cols-3">
                    {game.imagesPath.screenshots.map((image, index) => (
                        <ImageGallery
                            key={index}
                            screenshotPath={image}
                            size={400}
                            alt={game.title + " screenshot"}
                        />
                    ))}
                </div>
            </div>
            <BottomBar />
            <AllGames />
            <Footer />
        </>
    );
};

export default GameInfo;
