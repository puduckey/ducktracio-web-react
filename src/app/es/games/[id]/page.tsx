import { Game } from "@/components/GameList";
import Link from "next/link";
import gamesInfo from "../../../../../public/locales/gamesInfo_es.json";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import TopGamePresentation from "@/components/TopGamePresentation";
import ImageGallery from "@/components/ImageGallery";
import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";
import AllGames from "@/components/AllGames";
import getTranslations from "@/getTranslations";

export const generateMetadata = ({ params }: { params: { id: string } }) => {
    const game: Game | undefined = gamesInfo.games.find(
        (game: { id: string }) => game.id === params.id
    );

    return {
        title: game?.title,
        description: game?.title + " sitio web oficial",
    };
};

const GameInfo = ({ params }: { params: { id: string } }) => {
    const localization = getTranslations("es");
    const game: Game | undefined = gamesInfo.games.find(
        (game: { id: string }) => game.id === params.id
    );

    if (!game) {
        return (
            <div className="text-center">
                <Navbar language="es" currentUrl={"/es/games/" + params.id} />
                <p className="my-3">{localization.game_not_found}</p>
                <Link
                    href={"/es/"}
                    className="rounded-md bg-black p-2 text-white hover:bg-pink-400"
                >
                    {localization.return_to_home}
                </Link>
            </div>
        );
    }

    return (
        <>
            <Navbar language="es" currentUrl={"/es/games/" + params.id} />
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
                <h1 className="text-xl">{localization.information}</h1>
                <ul className="ml-5">
                    <li>
                        <b>{localization.status}: </b>
                        {game.status}
                    </li>
                    <li>
                        <b>{localization.release}: </b>
                        {game.release}
                    </li>
                    <li>
                        <b>{localization.platforms}: </b>
                        {game.platforms}
                    </li>
                    <li>
                        <b>{localization.genre}: </b>
                        {game.genre}
                    </li>
                    <li>
                        <b>{localization.player_count}: </b>
                        {game.playerCount}
                    </li>
                    <li>
                        <b>{localization.languages}: </b>
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

                <h1 className="text-xl">{localization.screenshots}</h1>
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
            <AllGames language="es" />
            <Footer />
        </>
    );
};

export default GameInfo;
