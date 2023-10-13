import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";
import GameList from "@/components/GameList";
import Navbar from "@/components/Navbar";
import React from "react";

const AllGamesPage = () => {
    return (
        <>
            <Navbar language="en" currentUrl="/games/" />
            <GameList language="en" />
            <BottomBar />
            <Footer />
        </>
    );
};

export default AllGamesPage;
