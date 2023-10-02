import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
    language: string;
    currentUrl: string;
}

const Navbar: FC<Props> = ({ language, currentUrl }) => {
    let homeUrl = "/";
    let switchLanguageUrl = "/es" + currentUrl;
    let switchLanguageText = "Español";

    if (language !== "en") {
        homeUrl += language;
        if (currentUrl) switchLanguageUrl = currentUrl.slice(3);
        switchLanguageText = "English";
    }
    return (
        <div className="flex items-center justify-between bg-black p-4">
            <Link href={homeUrl}>
                <Image
                    src="/img/logos/logo_nobg.png"
                    alt=""
                    width={50}
                    height={50}
                />
            </Link>
            <Link
                href={switchLanguageUrl}
                className="rounded bg-white px-4 py-2 text-black"
            >
                {switchLanguageText}
            </Link>
        </div>
    );
};

export default Navbar;
