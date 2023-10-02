import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import GameList from "@/components/GameList";
import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";

const Home = () => {
    return (
        <>
            <Navbar language="es" currentUrl={"/es/"} />
            <Main language="es" />
            <GameList language="es" />
            <BottomBar />
            <Footer />
            {/* <div className="bg-black p-5">
        <h1 className="bg-pink-400 mb-5">Home</h1>
        <h1 className="bg-cyan-400">Home</h1>
      </div> */}
        </>
    );
};
export default Home;
