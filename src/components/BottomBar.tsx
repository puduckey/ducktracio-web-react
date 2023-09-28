import Image from "next/image";

const BottomBar = () => {
    return (
        <Image
            src="/img/logos/div_bottom_black.png"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full"
            alt=""
        />
    );
};

export default BottomBar;
