import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-black p-4">
      <button>
        <Image src="/img/logos/logo_nobg.png" alt="" width={50} height={50} />
      </button>
      <button className="bg-white text-black px-4 py-2 rounded">Español</button>
    </div>
  );
};

export default Navbar;
