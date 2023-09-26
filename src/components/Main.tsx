import Image from "next/image";
import SocialMediaButton from "./SocialMediaButton";

const Main = () => {
    return (
        <div className="bg-black">
            <div className="grid grid-cols-7">
                <div className="col-span-3 hidden justify-center sm:flex">
                    <Image
                        src="/img/logos/naomi2.png"
                        width={420}
                        height={420}
                        alt=""
                    />
                </div>
                <div className="col-span-7 my-auto text-center sm:col-span-4">
                    <h1 className="mb-2 text-4xl text-white md:text-6xl">
                        Ducktracio
                    </h1>
                    <h2 className="text-l mb-8 text-gray-400 md:text-2xl">
                        Programming, digital art and game development.
                    </h2>
                    <div className="mx-10 mb-5 grid grid-cols-3 content-center gap-4 lg:grid-cols-6">
                        <SocialMediaButton />
                        <SocialMediaButton />
                        <SocialMediaButton />
                        <SocialMediaButton />
                        <SocialMediaButton />
                        <SocialMediaButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
