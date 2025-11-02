import './App.css'

function App() {
  // 1. Expression JavaScript pour obtenir la date et l'heure actuelles
  const dateActuelle = new Date().toLocaleTimeString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // 2. Variable contenant un élément JSX (un sous-titre)
  const sousTitreJSX = (
    <h2 style={{ color: 'darkblue' }}>
      Introduction au rendu dynamique et JSX
    </h2>
  );

  return (
    <div className="container">
      {/* Message de bienvenue personnalisé */}
      <h1>Bienvenue dans mon premier TP React et JSX !</h1>
      
      {/* Affichage de la variable JSX */}
      {sousTitreJSX} 

      <p>
        Ceci est le message de bienvenue créé pour ce TP.
      </p>

      {/* Affichage de l'expression JavaScript */}
      <p>
        La date et l'heure actuelles sont : <strong>{dateActuelle}</strong>
      </p>
    </div>
  )
}

export default App