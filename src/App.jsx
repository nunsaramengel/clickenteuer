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
    image: "https://images.unsplash.com/photo-1519074063261-bb83918ec481?w=800",
    options: [
      { text: "In den Keller gehen", next: "ende_schlecht" },
      { text: "Zurück zum Tor", next: "start" }
    ]
  },
  rabe: {
    text: "Der Rabe lässt einen silbernen Schlüssel fallen und fliegt davon.",
    image: "https://images.unsplash.com/photos/a-black-bird-sitting-on-top-of-a-roof-d-vBDK5rqR0?w=800",
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

export default function App() {
  const [scene, setScene] = useState("start");
  const current = STORY[scene];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 font-serif">
      <div className="max-w-lg w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
        <img src={current.image} className="w-full h-56 object-cover opacity-80" alt="Scene" />
        <div className="p-8">
          <p className="text-xl mb-8 leading-relaxed italic text-zinc-300">"{current.text}"</p>
          <div className="space-y-3">
            {current.options.map((opt, i) => (
              <button 
                key={i} 
                onClick={() => setScene(opt.next)}
                className="w-full text-left bg-zinc-800 hover:bg-amber-900/40 border border-zinc-700 hover:border-amber-500/50 p-4 rounded-xl transition-all"
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
