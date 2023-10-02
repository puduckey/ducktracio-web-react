import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-black text-center text-white">
            <div>
                <h1 className="text-2xl">ERROR 404</h1>
                <h2 className="mb-3">Page not found!</h2>
                <div className="mb-4 flex justify-center">
                    <Image
                        src="/img/logos/gameover_naomi.png"
                        width={300}
                        height={300}
                        alt="Naomi - Sleeping Flowers Thread Curse - Ducktracio"
                    />
                </div>
                <Link
                    href={"/"}
                    className="rounded-md border bg-black p-2 text-white hover:bg-white hover:text-black"
                >
                    Return to home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
