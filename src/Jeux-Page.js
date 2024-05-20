import React, { useState } from "react";
import JeuxNavbar from './jeux-navbar';
const Jeux = () => {

    const Filters = () => {
        const [showFilters, setShowFilters] = useState(false);
        const [filter1, setFilter1] = useState(false);
        const [filter2, setFilter2] = useState(false);
        const [filter3, setFilter3] = useState(false);

        const toggleFilters = () => {
            setShowFilters(!showFilters);
        };

        const handleFilterChange = (setFilterFunction, event) => {
            setFilterFunction(event.target.checked);
        };

        return (
            <div className="flex w-[12%] justify-center items-center bg-purple-400 p-1 rounded-md absolute h-8 right-7">
                <img
                    src="/images/filter-icon.png"
                    alt="Filter"
                    className=" w-[80%] cursor-pointer"
                    onClick={toggleFilters}
                />

                {showFilters && (
                    <div className="absolute top-16 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-4">
                        <div className="flex flex-col">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={filter1}
                                    onChange={(e) => handleFilterChange(setFilter1, e)}
                                    className="mr-1"
                                />
                                IMAGE
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={filter2}
                                    onChange={(e) => handleFilterChange(setFilter2, e)}
                                    className="mr-1"
                                />
                                TEXTE
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={filter3}
                                    onChange={(e) => handleFilterChange(setFilter3, e)}
                                    className="mr-1"
                                />
                                SON
                            </label>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className=" bg-white border-2 border-purple-500 rounded-lg shadow-lg h-[96vh] mt-[2vh] w-[79%] md:w-[79%] ml-[0.5%] mr-[1.5%] py-1 px-1">
            <div className="flex items-center ml-4 mt-3 mb-3">
                <img src="/images/back-icon.png" alt="Go Back" className="w-[2%]" />
                <hr className=" w-[2%] rotate-90 border-gray-200" />
                <img src="/images/next-icon.png" alt="Next" className="w-[2%] " />
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-md ml-6 mr-4 text-gray-700">
                    Nom du Jeu
                </span>
                <img src="/images/pen-icon.png" alt="select" className="w-[2.5%]" />
                <div className="fixed right-8 flex justify-end items-center p-5 ">
                    <button className="flex items-center bg-hover-color py-1 px-2 rounded-lg hover:bg-black">
                        <img
                            src="/images/remote-icon.png"
                            alt="Remote Icon"
                            className="w-5 h-auto mr-2"
                        />
                        <span className="text-base text-white">Carte Cachées</span>
                        <img
                            src="/images/more2-icon.png"
                            alt="More Icon"
                            className="w-3 h-auto mt-1 ml-2"
                        />
                    </button>
                    <img
                        src="/images/bigger-icon.png"
                        alt="Make it Bigger"
                        className="w-8 h-auto ml-6"
                    />
                </div>
            </div>

            <JeuxNavbar />
            <div className="flex flex-col items-center w-full p-4 overflow-hidden">
                <div className="flex w-full">
                    <div className="flex flex-col items-center w-[80%] bg-purple-50 border-2 border-purple-500 rounded-lg p-2 overflow-hidden mr-10">
                        <div className="w-[70%] h-auto bg-purple-50 rounded-lg p-1 flex justify-around items-center overflow-hidden hover:bg-purple-200 hover:bg-opacity-60">
                            {Array(3).fill(0).map((_, index) => (
                                <div key={index} className="flex flex-col items-center justify-center w-[25%] bg-white shadow-lg rounded-lg p-1">
                                    <img
                                        src="/images/quiz-card.png"
                                        alt="Logo"
                                        className="w-full h-24 mb-1"
                                    />
                                    <span className="text-xs">Fruits Rouges</span>
                                    <img
                                        src="/images/sound-icon.png"
                                        alt="Sound Icon"
                                        className="w-6 h-6 mt-1"
                                    />
                                </div>
                            ))}
                        </div>
                        <hr className="w-full mt-2 mb-2 border-gray-300" />
                        <div className="w-[70%] h-auto bg-purple-50 rounded-lg p-1 flex justify-around items-center overflow-hidden hover:bg-purple-200  hover:bg-opacity-60">
                            {Array(3).fill(0).map((_, index) => (
                                <div key={index} className="flex flex-col items-center justify-center w-[25%] bg-white shadow-lg rounded-lg p-1">
                                    <img
                                        src="/images/quiz-card.png"
                                        alt="Logo"
                                        className="w-full h-24 mb-1"
                                    />
                                    <span className="text-xs">Fruits Rouges</span>
                                    <img
                                        src="/images/sound-icon.png"
                                        alt="Sound Icon"
                                        className="w-6 h-6 mt-1"
                                    />
                                </div>
                            ))}
                        </div>
                        <hr className="w-full mt-2 mb-2 border-gray-300" />
                        <div className="w-[70%] h-auto bg-puple-50 rounded-lg p-1 flex justify-around items-center overflow-hidden hover:bg-purple-200 hover:bg-opacity-60">
                            {Array(2).fill(0).map((_, index) => (
                                <div key={index} className="flex flex-col items-center justify-center w-[25%] bg-white shadow-lg rounded-lg p-1">
                                    <img
                                        src="/images/quiz-card.png"
                                        alt="Logo"
                                        className="w-full h-24 mb-1"
                                    />
                                    <span className="text-xs">Fruits Rouges</span>
                                    <img
                                        src="/images/sound-icon.png"
                                        alt="Sound Icon"
                                        className="w-6 h-6 mt-1"
                                    />
                                </div>
                            ))}
                            <div className="flex flex-col bg-opacity-0 items-center justify-center w-[25%] bg-white shadow-lg border-4 border-dashed border-hover-color rounded-lg p-1">
                                <div className="w-full h-24"></div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-[25%] bg-purple-50 border-2 border-purple-500 rounded-lg p-1 ml-10 mr-2">
                        <img
                            src="/images/info-icon.png"
                            alt="Info Icon"
                            className="absolute top-1 right-1 w-[8%]"
                        />
                        <div className="flex flex-col items-center mt-3">
                            <img
                                src="/images/gallerie.png"
                                alt="Gallerie"
                                className="w-[50%] mb-1"
                            />
                        </div>
                        <span className="text-xs text-hover-color ml-2">Consultez votre Gallerie</span>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col w-[90%] bg-purple-50 border-2 border-purple-500 rounded-lg p-1 mt-1 pt-2">

                                <div className="flex mb-1">
                                    <p className="flex items-center ml-2">
                                        <img
                                            src="/images/back1-icon.png"
                                            alt="Go Back"
                                            className="w-3 h-3 mr-3"
                                        />
                                    </p>
                                    <span className="text-md">Vos Cartes</span>
                                </div>


                                <div className="flex items-center ml-2">
                                    <input
                                        type="text"
                                        placeholder="Rechercher"
                                        className="flex items-center bg-white border-2 border-hover-color px-4 py-2 rounded-lg h-8 w-[80%]"

                                    />
                                    <Filters />
                                </div>
                                <div className="flex justify-center">
                                    <div className="w-[80%] grid grid-rows-2 gap-1 mt-2">
                                        {Array(2).fill(0).map((_, index) => (
                                            <div class="w-[100%] grid grid-cols-3 gap-1 ">
                                                {Array(3).fill(0).map((_, index) => (
                                                    <div className="flex items-center justify-center bg-white h-20 p-1 rounded border border-gray-400">
                                                        <div className="flex items-center rounded justify-center w-full h-full border-2 border-purple-image box-border">
                                                            <img
                                                                src="/images/image.png"
                                                                alt="image"
                                                                className="w-[60%]"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="justify-center">
                                    <div className="flex items-center justify-center mt-2">
                                        <img
                                            src="/images/plus-icon.png"
                                            alt="plus"
                                            className="w-4 h-4 mr-2"
                                        />
                                        <span className="text-xs text-hover-color">Ajouter une nouvelle carte</span>
                                    </div>
                                    <img
                                        src="/images/big-card-icon.png"
                                        alt="Add new card"
                                        className="w-[75%] h-auto mr-auto ml-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jeux;
