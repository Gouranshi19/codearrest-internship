import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Notes() {
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://127.0.0.1:8000/notes/api/", {
        credentials: "include",
        })
        .then((res) => res.json())
        .then((data) => setNotes(data))
        .catch((err) => console.error(err));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://127.0.0.1:8000/notes/api/delete/${id}/`, {
        method: "DELETE",
        credentials: "include",
        }).then(() => setNotes(notes.filter((note) => note.id !== id)));
    };

    return (
        <div style={{ fontFamily: "Arial", minHeight: "100vh", background: "#f8f9fa" }}>
        <nav style={{ background: "#343a40", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}> Notes App</span>
            <button onClick={() => navigate("/")} style={{ background: "transparent", border: "1px solid white", color: "white", padding: "6px 14px", borderRadius: "4px", cursor: "pointer" }}>Home</button>
        </nav>

        <div style={{ maxWidth: "700px", margin: "40px auto", padding: "0 16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
            <h2>My Notes</h2>
            <button onClick={() => navigate("/notes/add")} style={{ padding: "8px 16px", background: "#198754", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>+ Add Note</button>
            </div>

            {notes.length === 0 ? (
            <p style={{ textAlign: "center", color: "gray" }}>No notes found.</p>
            ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
                {notes.map((note) => (
                <li key={note.id} style={{ background: "white", border: "1px solid #ddd", borderRadius: "8px", padding: "16px", marginBottom: "12px" }}>
                    <h3 style={{ margin: "0 0 8px 0" }}>{note.title}</h3>
                    <p style={{ margin: "0 0 12px 0", color: "#555" }}>{note.content}</p>
                    <button onClick={() => navigate(`/notes/edit/${note.id}`)} style={{ marginRight: "8px", padding: "4px 12px", background: "#0d6efd", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Edit</button>
                    <button onClick={() => handleDelete(note.id)} style={{ padding: "4px 12px", background: "#dc3545", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Delete</button>
                </li>
                ))}
            </ul>
            )}
        </div>
        </div>
    );
}

export default Notes;