import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import GameList from "@/components/GameList";

const Home = () => {
    return (
        <>
            <Navbar />
            <Main />
            <GameList />
            {/* <div className="bg-black p-5">
        <h1 className="bg-pink-400 mb-5">Home</h1>
        <h1 className="bg-cyan-400">Home</h1>
      </div> */}
        </>
    );
};
export default Home;
