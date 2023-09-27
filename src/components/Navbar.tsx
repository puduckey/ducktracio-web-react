import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between bg-black p-4">
            <Link href={"/"}>
                <Image
                    src="/img/logos/logo_nobg.png"
                    alt=""
                    width={50}
                    height={50}
                />
            </Link>
            <button className="rounded bg-white px-4 py-2 text-black">
                Español
            </button>
        </div>
    );
};

export default Navbar;
