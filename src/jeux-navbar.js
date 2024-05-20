import React from 'react';

const NavBar = () => {
  return (
    <div className="flex items-center w-full ml-4">
                <div className="flex mr-6 ">
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
                    <div className="fixed right-8 flex justify-end items-center mr-5">
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
  );
};

export default NavBar;