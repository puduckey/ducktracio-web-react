import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import getTranslations from "@/getTranslations";

export const generateMetadata = () => {
    return {
        title: "Privacy Policy | Ducktracio",
        description: "Ducktracio Privacy Policy",
    };
};

const PrivacyPolicy = () => {
    const localization = getTranslations("en");

    return (
        <>
            <Navbar language="en" currentUrl="/privacy-policy" />
            <div className="bg-black p-8 text-center text-3xl text-white">
                {localization.privacy_policy}
            </div>
            <div className="privacy-policy bg-white px-2 py-4 text-justify text-sm text-black lg:px-36">
                <p className="mb-4 text-sm">{localization.pp_1}</p>
                <p className="mb-4 text-sm">{localization.pp_2}</p>
                <p className="mb-4 text-sm">{localization.pp_3}</p>
                <h1 className="text-base font-bold">{localization.pp_4}</h1>
                <p className="mb-4 text-sm">{localization.pp_5}</p>
                <ul className="mb-4">
                    <li className="mb-1 ml-5">
                        <Link
                            href="https://policies.google.com/privacy"
                            className="text-pink-400 underline underline-offset-2 hover:font-bold"
                        >
                            {localization.pp_6}
                        </Link>
                    </li>
                    <li className="mb-1 ml-5">
                        <Link
                            href="https://unity.com/legal/privacy-policy"
                            className="text-pink-400 underline underline-offset-2 hover:font-bold"
                        >
                            {localization.pp_7}
                        </Link>
                    </li>
                </ul>

                <h1 className="text-base font-bold">{localization.pp_8}</h1>
                <p className="mb-4 text-sm">{localization.pp_9}</p>
                <h1 className="text-base font-bold">{localization.pp_10}</h1>
                <p className="mb-4 text-sm">{localization.pp_11}</p>
                <h1 className="text-base font-bold">{localization.pp_12}</h1>
                <p className="mb-4 text-sm">{localization.pp_13}</p>
                <h1 className="text-base font-bold">{localization.pp_14}</h1>
                <p className="mb-4 text-sm">{localization.pp_15}</p>
                <h1 className="text-base font-bold">{localization.pp_16}</h1>
                <p className="mb-4 text-sm">{localization.pp_17}</p>
                <h1 className="text-base font-bold">{localization.pp_18}</h1>
                <p className="mb-4 text-sm">
                    {localization.pp_19}
                    <Link
                        href="mailto:ducktracio@gmail.com"
                        className="text-pink-400 underline underline-offset-2 hover:font-bold"
                    >
                        ducktracio@gmail.com
                    </Link>
                    .
                </p>
            </div>
            <BottomBar />
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
