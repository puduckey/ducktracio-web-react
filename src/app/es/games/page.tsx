import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";
import GameList from "@/components/GameList";
import Navbar from "@/components/Navbar";
import React from "react";

const AllGamesPage = () => {
    return (
        <>
            <Navbar language="es" currentUrl="/es/games/" />
            <GameList language="es" />
            <BottomBar />
            <Footer />
        </>
    );
};

export default AllGamesPage;
