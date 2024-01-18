import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faInstagram,
    faXTwitter,
    faGooglePlay,
    faItchIo,
    faDeviantart,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-black ">
            <div className="grid grid-cols-6 px-10 pb-6 pt-10 text-gray-500">
                <Link
                    href="https://instagram.com/ducktracio"
                    className="flex justify-center hover:text-white"
                >
                    <FontAwesomeIcon icon={faInstagram} width={30} />
                </Link>
                <Link
                    href="https://twitter.com/Ducktracio"
                    className="flex justify-center hover:text-white"
                >
                    <FontAwesomeIcon icon={faXTwitter} width={30} />
                </Link>
                <Link
                    href="https://play.google.com/store/apps/dev?id=8767788395082451067"
                    className="flex justify-center hover:text-white"
                >
                    <FontAwesomeIcon icon={faGooglePlay} width={30} />
                </Link>
                <Link
                    href="https://ducktracio.itch.io/"
                    className="flex justify-center hover:text-white"
                >
                    <FontAwesomeIcon icon={faItchIo} width={30} />
                </Link>
                <Link
                    href="https://www.deviantart.com/ducktracio"
                    className="flex justify-center hover:text-white"
                >
                    <FontAwesomeIcon icon={faDeviantart} width={20} />
                </Link>
                <Link
                    href="mailto:ducktracio@gmail.com"
                    className="flex justify-center hover:text-white"
                >
                    <FontAwesomeIcon icon={faEnvelope} width={30} />
                </Link>
            </div>
            <div className="pb-3 text-center text-white">
                Copyright © 2023 - 2024 Ducktracio
            </div>
        </div>
    );
};

export default Footer;
