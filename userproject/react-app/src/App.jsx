import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/notes/api/", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}> My Notes</h1>

      {notes.length === 0 ? (
        <p style={{ textAlign: "center", color: "gray" }}>No notes found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {notes.map((note) => (
            <li
              key={note.id}
              style={{
                background: "#f9f9f9",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "12px",
              }}
            >
              <h3 style={{ margin: "0 0 8px 0" }}>{note.title}</h3>
              <p style={{ margin: 0, color: "#555" }}>{note.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;