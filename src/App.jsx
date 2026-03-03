import React, { useState } from 'react';

// ==========================================
// HIER NEUE GESCHICHTEN HINZUFÜGEN
// ==========================================
const STORY_DATA = {
  // Jede Szene hat eine ID (z.B. "start")
  "start": {
    text: "Du stehst vor einer alten Burgruine. Die Tore sind schwer und verrostet.",
    bild: "https://images.unsplash.com/photo-1500622358110-44161a467406?w=800",
    optionen: [
      { text: "An das Tor klopfen", nächsteSzene: "anklopfen" },
      { text: "Um die Burg herumgehen", nächsteSzene: "wald" }
    ]
  },
  "anklopfen": {
    text: "Ein kleiner Gnom öffnet eine Luke und starrt dich böse an. 'Was willst du hier?'",
    bild: "https://images.unsplash.com/photo-1516553174826-d05833723cd4?w=800",
    optionen: [
      { text: "Sagen, dass du ein Held bist", nächsteSzene: "held" },
      { text: "Wegrennen", nächsteSzene: "start" }
    ]
  },
  "wald": {
    text: "Im Wald entdeckst du ein leuchtendes Schwert im Stein.",
    bild: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    optionen: [
      { text: "Das Schwert ziehen", nächsteSzene: "held" },
      { text: "Lieber nicht anfassen", nächsteSzene: "start" }
    ]
  },
  "held": {
    text: "Herzlichen Glückwunsch! Du hast dein Abenteuer erfolgreich begonnen.",
    bild: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800",
    optionen: [
      { text: "Von vorne beginnen", nächsteSzene: "start" }
    ]
  }
};

// ==========================================
// DIE LOGIK (Muss nicht geändert werden)
// ==========================================
export default function App() {
  const [szeneId, setSzeneId] = useState("start");
  const aktuelleSzene = STORY_DATA[szeneId];

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={aktuelleSzene.bild} alt="Bild" style={styles.image} />
        
        <div style={styles.content}>
          <p style={styles.text}>{aktuelleSzene.text}</p>
          
          <div style={styles.buttonArea}>
            {aktuelleSzene.optionen.map((opt, index) => (
              <button 
                key={index} 
                onClick={() => setSzeneId(opt.nächsteSzene)}
                style={styles.button}
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

// Einfaches CSS-in-JS für direktes Kopieren
const styles = {
  container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1a1a', color: 'white', fontFamily: 'sans-serif', padding: '20px' },
  card: { maxWidth: '500px', width: '100%', backgroundColor: '#2a2a2a', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
  image: { width: '100%', height: '250px', objectFit: 'cover' },
  content: { padding: '25px' },
  text: { fontSize: '1.2rem', lineHeight: '1.5', marginBottom: '25px' },
  buttonArea: { display: 'flex', flexDirection: 'column', gap: '10px' },
  button: { padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#3b82f6', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }
};