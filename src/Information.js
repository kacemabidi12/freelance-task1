import React, {useState} from "react";

const Information = () => {
    const [gender, setGender] = useState(null);
    return (
        <div className="w-full">
            <div className="flex items-center block rounded-lg bg-purple-100 shadow-md pl-10 p-2 mb-1">
                <img
                    src="/images/ParentPicture.png"
                    alt="Parent Picture"
                    className="w-[7%] mr-4"
                />
                <div className="mr-auto">
                    <p className="font-semibold text-[130%] block">Parent 1</p>
                    <div className="text-sm block text-gray-500">
                        Abonné Depuis Mars 2024
                    </div>
                </div>
                <div className="ml-20">
                    <p className="flex justify-center items-center font-md text-[130%] block">
                        75
                    </p>
                    <p className="text-sm block text-gray-500">Classes</p>
                </div>
                <hr className="w-[4%] rotate-90 border-gray-300 border-t-2" />
                <div className="mr-12">
                    <p className="flex justify-center items-center font-md text-[130%] block">
                        16
                    </p>
                    <p className="text-sm block text-gray-500">Abonnements</p>
                </div>
                <div>
                    <p className="flex justify-center items-center block">
                        <img
                            src="/images/mail-icon.png"
                            alt="Parent Picture"
                            className="w-[17%] mb-1.5 mr-4"
                        />
                    </p>
                    <p className="text-sm block text-gray-500 mt-1.5">
                        email@example.com
                    </p>
                </div>
                <hr className="w-[4%] rotate-90 border-gray-300 border-t-2" />
                <div className="pr-10">
                    <p className="flex justify-center items-center block">
                        <img
                            src="/images/phone-icon.png"
                            alt="Parent Picture"
                            className="mb-1.5 w-[17%] mr-4"
                        />
                    </p>
                    <p className="text-sm block text-gray-500 mt-1.5">
                        +216 22 222 222
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-start w-full bg-white shadow-sm rounded-lg pl-10 p-2">
                <div className="flex items-center w-full mb-2">
                    <label className="w-[30%] text-black font-md">Date de Naissance:</label>
                    <input
                        type="date"
                        className="w-[65%] bg-purple-50 rounded-md px-3 py-2 mx-2"
                    />
                </div>
                <div className="flex items-center w-full mb-2">
                    <label className="w-[30%] text-black font-md">Sexe:</label>
                    <div className="w-[30%] flex justify-between">
                        <button
                            className={`w-full mr-1 py-2 rounded-md ${gender === 'Homme' ? 'bg-purple-50 border-2 border-purple-300 text-black' : 'bg-purple-50 text-gray-300'}`}
                            onClick={() => setGender('Homme')}
                        >
                            Homme
                        </button>
                        <button
                            className={`w-full ml-1 py-2 rounded-md ${gender === 'Femme' ? 'bg-purple-50 border-2 border-purple-300 text-black' : 'bg-purple-50 text-gray-300'}`}
                            onClick={() => setGender('Femme')}
                        >
                            Femme
                        </button>
                    </div>
                </div>
                {[
                    { label: "District", type: "text", placeholder: "Veuillez Saisir Votre District ici" },
                    { label: "Ville", type: "text", placeholder: "Veuillez Saisir Votre Ville ici" },
                    { label: "Délégation Du Gouvernorat", type: "text", placeholder: "Veuillez Saisir Votre Délégation Du Gouvernorat ici" },
                    { label: "Adresse Postale", type: "text", placeholder: "Veuillez Saisir Votre Adresse Postale ici" },
                    { label: "Numéro De Bâtiment", type: "number", placeholder: "Veuillez Saisir Votre Numéro De Bâtiment ici" },
                    { label: "Code Postal", type: "number", placeholder: "Veuillez Saisir Votre Code Postale ici" },
                ].map((field, index) => (
                    <div className="flex items-center w-full mb-2" key={index}>
                        <label className="w-[30%] text-black font-md">{field.label}</label>
                        <input
                            type={field.type}
                            className="w-[65%] bg-purple-50 rounded-md px-3 py-2 mx-2"
                            placeholder={field.placeholder}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Information;