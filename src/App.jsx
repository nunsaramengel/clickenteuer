import React, { useState } from 'react';

const STORY = {
  start: {
    text: "Du stehst vor den Toren einer nebelverhangenen Burg. Ein Rabe krächzt auf einem Schild.",
    image: "https://images.unsplash.com/photo-1505832018823-50331d70d237?w=800",
    options: [
      { text: "Das schwere Tor aufstoßen", next: "vorhof" },
      { text: "Den Raben füttern", next: "rabe" }
    ]
  },
  vorhof: {
    text: "Der Vorhof ist leer, aber du hörst Kettenrasseln aus dem Keller.",
    // HIER TESTWEISE KEIN BILD
    options: [
      { text: "In den Keller gehen", next: "ende_schlecht" },
      { text: "Zurück zum Tor", next: "start" }
    ]
  },
  rabe: {
    text: "Der Rabe lässt einen silbernen Schlüssel fallen und fliegt davon.",
    image: "https://images.unsplash.com/photo-1433888376991-1297486ba3f5?q=80&w=4368&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800", // HIER EIN KAPUTTER LINK
    options: [
      { text: "Den Schlüssel nehmen", next: "ende_gut" }
    ]
  },
  ende_gut: {
    text: "Mit dem Schlüssel öffnest du die geheime Schatzkammer. Du bist reich!",
    image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=800",
    options: [{ text: "Neustart", next: "start" }]
  },
  ende_schlecht: {
    text: "Ein Geist erscheint und erschreckt dich zu Tode. Game Over.",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800",
    options: [{ text: "Nochmal versuchen", next: "start" }]
  }
};

// Kleine Hilfskomponente für das Bild mit Fehlerschutz
const SceneImage = ({ src }) => {
  const [error, setError] = useState(false);

  if (!src) return null; // Falls gar kein Bild definiert ist

  return (
    <div className="h-56 w-full bg-zinc-800 relative overflow-hidden">
      {!error ? (
        <img 
          src={src} 
          onError={() => setError(true)} 
          className="w-full h-full object-cover opacity-80" 
          alt="Scene" 
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-zinc-600 italic text-sm border-b border-zinc-800">
          Die Sicht ist zu nebelig... (Bild nicht verfügbar)
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [scene, setScene] = useState("start");
  const current = STORY[scene];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 font-serif">
      <div className="max-w-lg w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 transition-all duration-500">
        
        {/* Nutzt die neue Image-Komponente */}
        <SceneImage src={current.image} />

        <div className="p-8">
          <p className="text-xl mb-8 leading-relaxed italic text-zinc-300">
            "{current.text}"
          </p>
          
          <div className="space-y-3">
            {current.options.map((opt, i) => (
              <button 
                key={i} 
                onClick={() => setScene(opt.next)}
                className="w-full text-left bg-zinc-800 hover:bg-amber-900/30 border border-zinc-700 hover:border-amber-500/50 p-4 rounded-xl transition-all active:scale-95"
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
