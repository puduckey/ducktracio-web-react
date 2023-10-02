import Image from "next/image";
import SocialMediaButton from "./SocialMediaButton";
import {
    faInstagram,
    faXTwitter,
    faGooglePlay,
    faItchIo,
    faDeviantart,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import React, { FC } from "react";
import getTranslations from "@/getTranslations";

interface Props {
    language: string;
}

const Main: FC<Props> = ({ language }) => {
    const localization = getTranslations(language);

    return (
        <div className="bg-black">
            <div className="grid grid-cols-12">
                <div className="col-span-4 hidden justify-center lg:flex">
                    <Image
                        src="/img/logos/naomi2.png"
                        width={420}
                        height={420}
                        alt=""
                    />
                </div>
                <div className="col-span-12 my-auto text-center lg:col-span-8">
                    <h1 className="mb-2 text-4xl text-white md:text-6xl">
                        Ducktracio
                    </h1>
                    <h2 className="text-l mb-8 text-gray-400 md:text-2xl">
                        {localization.programing_digitalart_gamedev}
                    </h2>
                    <div className="mx-10 mb-5 grid grid-cols-3 content-center gap-4 lg:grid-cols-6">
                        <SocialMediaButton
                            url="https://instagram.com/ducktracio"
                            isPink={true}
                            icon={faInstagram}
                            width={20}
                        />
                        <SocialMediaButton
                            url="https://twitter.com/Ducktracio"
                            isPink={false}
                            icon={faXTwitter}
                            width={20}
                        />
                        <SocialMediaButton
                            url="https://play.google.com/store/apps/dev?id=8767788395082451067"
                            isPink={true}
                            icon={faGooglePlay}
                            width={20}
                        />
                        <SocialMediaButton
                            url="https://ducktracio.itch.io/"
                            isPink={false}
                            icon={faItchIo}
                            width={20}
                        />
                        <SocialMediaButton
                            url="https://www.deviantart.com/ducktracio"
                            isPink={true}
                            icon={faDeviantart}
                            width={12}
                        />
                        <SocialMediaButton
                            url="mailto:ducktracio@gmail.com"
                            isPink={false}
                            icon={faEnvelope}
                            width={20}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
