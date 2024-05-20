import React, { useState } from "react";
import Information from "./Information";

const Jeux = () => {
    return (
        <div className="bg-white border-2 border-purple-500 rounded-lg shadow-lg h-[96vh] mt-[2vh] w-[79%] md:w-[79%] ml-[0.5%] mr-[1.5%] py-2 px-2">
            <div className="flex items-center ml-4 mt-4 mb-6">
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
                        className="w-8 h-auto ml-4"
                    />
                </div>
            </div>

            <div className="flex items-center w-full ml-4">
                <div className="flex mr-6 mb-1">
                    <p className="flex items-center border-b-4 text-hover-color border-hover-color">
                        <img
                            src="/images/jeux2-icon.png"
                            alt="Make it Bigger"
                            className="w-4 h-auto mr-3"
                        />
                        <span className="text-sm">CHOISIR JEU</span>
                    </p>
                    <button className="flex items-center w-auto h-auto ml-4 mt-1 border-2 border-hover-color bg-white py-1 px-2 rounded-lg hover:bg-black">
                        <span className="text-sm text-gray-600">Niveau Scolaire</span>
                        <img
                            src="/images/more-icon.png"
                            alt="More Icon"
                            className="w-2 h-auto ml-2"
                        />
                    </button>
                    <button className="flex items-center w-auto h-auto ml-0.5 mt-1 border-2 border-hover-color bg-white py-1 px-2 rounded-lg hover:bg-black">
                        <span className="text-sm text-gray-600">Matière</span>
                        <img
                            src="/images/more-icon.png"
                            alt="More Icon"
                            className="w-2 h-auto ml-2"
                        />
                    </button>
                    <button className="flex items-center w-auto h-auto ml-0.5 mt-1 border-2 border-hover-color bg-white py-1 px-2 rounded-lg hover:bg-black">
                        <span className="text-sm text-gray-600">Sujet & Thème</span>
                        <img
                            src="/images/more-icon.png"
                            alt="More Icon"
                            className="w-2 h-auto ml-2"
                        />
                    </button>
                    <button className="flex items-center w-auto h-auto ml-0.5 mt-1 border-2 border-hover-color bg-white py-1 px-2 rounded-lg hover:bg-black">
                        <span className="text-sm text-gray-600">Sous-Sujet</span>
                        <img
                            src="/images/more-icon.png"
                            alt="More Icon"
                            className="w-2 h-auto ml-2"
                        />
                    </button>
                    <button className="flex items-center w-auto h-auto ml-0.5 mt-1 border-2 border-hover-color bg-white py-1 px-2 rounded-lg hover:bg-black">
                        <span className="text-sm text-gray-600">Chapitre</span>
                        <img
                            src="/images/more-icon.png"
                            alt="More Icon"
                            className="w-2 h-auto ml-2"
                        />
                    </button>
                    <button className="flex items-center w-auto h-auto ml-0.5 mt-1 border-2 border-hover-color bg-white py-1 px-2 rounded-lg hover:bg-black">
                        <span className="text-sm text-gray-600">Compétence</span>
                        <img
                            src="/images/more-icon.png"
                            alt="More Icon"
                            className="w-2 h-auto ml-2"
                        />
                    </button>
                    <div className="fixed right-8 flex justify-end items-center mt-1 mr-5">
                        <button className="flex items-center bg-gray-300 py-1 px-2 rounded-lg hover:bg-black mr-2">
                            <img
                                src="/images/remote-icon.png"
                                alt="Remote Icon"
                                className="w-5 h-auto mr-2"
                            />
                            <span className="text-base text-white">Ajouter</span>
                        </button>
                        <button className="flex items-center bg-green-button py-1 px-2 rounded-lg hover:bg-black">
                            <img
                                src="/images/folder-icon.png"
                                alt="Remote Icon"
                                className="w-5 h-auto mr-2"
                            />
                            <span className="text-base text-white">Sauvegarder</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex w-full ml-4 mt-4">
                <div className="w-[70%] bg-white border-2 border-purple-500 rounded-lg p-4 mr-11">
                    <h2 className="text-lg font-semibold mb-2">Container 1</h2>
                    <p>Content for the first container.</p>
                </div>
                <div className="w-[23%] bg-white border-2 border-purple-500 rounded-lg p-4 mr-4">
                    <h2 className="text-lg font-semibold mb-2">Container 2</h2>
                    <p>Content for the second container.</p>
                </div>
            </div>
        </div>
    );
};

export default Jeux;
