import React, { useState } from 'react';

// ======================================================
// 1. Composant fonctionnel avec props : Bienvenue
// ======================================================
/**
 * Un composant simple qui affiche un message de bienvenue personnalisé.
 * Il reçoit le nom à saluer via les "props".
 * * @param {object} props - Les propriétés passées par le parent.
 * @param {string} props.nom - Le nom de la personne à saluer.
 */
function Bienvenue(props) {
  // Les props sont accessibles via l'objet `props` ou par déstructuration ({ nom })
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-blue-800">
        Bonjour, {props.nom} !
      </h2>
      <p className="text-blue-700">
        Bienvenue dans le TP 2 : Hooks et Props.
      </p>
    </div>
  );
}

// ======================================================
// 2. Composant fonctionnel avec useState : Compteur
// ======================================================
/**
 * Un composant de compteur qui utilise le Hook useState
 * pour gérer et mettre à jour son propre état interne.
 */
function Compteur() {
  // Déclaration du state 'compteur' avec useState.
  // 'compteur' est la valeur actuelle, 'setCompteur' est la fonction pour la modifier.
  // L'état initial est 0.
  const [compteur, setCompteur] = useState(0);

  // Fonction pour incrémenter le compteur
  const incrementer = () => {
    // Utilisation de la fonction setCompteur pour mettre à jour l'état.
    // Cela déclenche un nouveau rendu du composant.
    setCompteur(compteur + 1);
  };

  // Fonction pour décrémenter le compteur
  const decrementer = () => {
    setCompteur(compteur - 1);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl text-center border-2 border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Mon Compteur Fonctionnel</h3>
      
      {/* Affichage de l'état actuel */}
      <p className="text-5xl font-extrabold mb-6 text-indigo-600">{compteur}</p>

      {/* Boutons d'interaction */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={incrementer}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Incrémenter (+)
        </button>
        <button
          onClick={decrementer}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Décrémenter (-)
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        L'état du compteur ({compteur}) est géré localement par le hook useState.
      </p>
    </div>
  );
}


// ======================================================
// 3. Intégration dans App.jsx (Composant Parent)
// ======================================================
/**
 * Le composant principal de l'application.
 * Il intègre et utilise les composants Bienvenue et Compteur.
 * Il passe des "props" au composant Bienvenue.
 */
function App() {
  return (
    // Conteneur principal de l'application avec styles Tailwind CSS pour centrer et styliser
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8 font-sans">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 border-b-4 border-indigo-500 pb-2">
          TP 2 : Hooks et Props en Action
        </h1>
      </header>

      <main className="w-full max-w-2xl">
        {/* 1. Utilisation du composant Bienvenue et passage de la prop 'nom' */}
        <Bienvenue nom="Développeur React" />

        <div className="my-8">
          {/* 2. Utilisation du composant Compteur */}
          <Compteur />
        </div>
      </main>

      <footer className="mt-10 text-sm text-gray-400">
        Composants Bienvenue (avec props) et Compteur (avec useState) intégrés.
      </footer>
      
    </div>
  );
}

export default App;
