import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white border-2 border-purple-500 rounded-lg shadow-lg h-[96vh] mt-[2vh] mb-[2vh] w-[20%] md:w-[20%] ml-[1.5%] py-4 px-4">
      <div className="flex items-center justify-center">
        <img src="/images/edpLogo.png" alt="Logo" className="w-[30%]" />
      </div>
      <hr className="w-full mt-4 mb-4 border-gray-200" />
      <ul className="space-y-2">
        <li className="bg-prof-purple flex items-center block text-white py-2 px-4 rounded-lg mb-4">
          <img src="/images/ProfPicture.png" alt="Profile Picture" className="w-[20%] mr-2" />
          <div>
            <Link to="/profile" className="font-semibold block">Prof. Mahmoud</Link>
            <div className="block">Administrateur</div>
          </div>
          <img src="/images/next2-icon.png" alt="next" className="ml-10 w-[10%]" />
        </li>
        <li className="flex items-center space-x-4 mb-8">
          <input type="text" placeholder="Rechercher" className="flex items-center bg-gray-200 px-4 py-2 rounded-lg w-full" />
        </li>
        <li className="flex items-center block text-black py-2 px-4 rounded-lg border-2 border-hover-color hover:bg-hover-color hover:text-white">
          <img src="/images/abon-icon.png" alt="Logo" className="w-[10%] mr-2" />
          <Link to="/abonnes">Abonnés</Link>
        </li>
        <li className="flex items-center block text-black py-2 px-4 rounded-lg border-2 border-hover-color hover:bg-hover-color hover:text-white">
          <img src="/images/eleves-icon.png" alt="Logo" className="w-[10%] mr-2" />
          <Link to="/eleves">Elèves</Link>
        </li>
        <li className="flex items-center block text-black py-2 px-4 rounded-lg border-2 border-hover-color hover:bg-hover-color hover:text-white">
          <img src="/images/classes-icon.png" alt="Logo" className="w-[10%] mr-2" />
          <Link to="/classes">Classes</Link>
        </li>
        <li className="flex items-center block text-black py-2 px-4 rounded-lg border-2 border-hover-color hover:bg-hover-color hover:text-white">
          <img src="/images/contenu-icon.png" alt="Logo" className="w-[10%] mr-2" />
          <Link to="/contenu">Contenu</Link>
        </li>
        <li className="flex items-center block text-black py-2 px-4 rounded-lg border-2 border-hover-color hover:bg-hover-color hover:text-white">
          <img src="/images/jeux-icon.png" alt="Logo" className="w-[10%] mr-2" />
          <Link to="/jeux">Jeux</Link>
        </li>
        <li className="flex items-center block text-black py-2 px-4 rounded-lg border-2 border-hover-color hover:bg-hover-color hover:text-white">
          <img src="/images/cours-icon.png" alt="Logo" className="w-[10%] mr-2" />
          <Link to="/cours">Cours</Link>
        </li>
        <li className="flex items-center block text-black py-2 px-4 rounded-lg border-2 border-hover-color hover:bg-hover-color hover:text-white">
          <img src="/images/stat-icon.png" alt="Logo" className="w-[10%] mr-2" />
          <Link to="/statistiques">Statistiques</Link>
          <img src="/images/2notif-icon.png" alt="notif" className="ml-24 w-[10%]" />
        </li>
        <li className="absolute bottom-8 font-inter flex items-center block text-gray-400 py-2 px-4 rounded-lg mt-auto hover:bg-hover-color hover:text-white">
          <img src="/images/disconnect-icon.png" alt="Logo" className="w-[10%] mr-2" />
          <Link to="/logout">Se Déconnecter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
