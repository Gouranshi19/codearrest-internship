import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNote() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie) {
        document.cookie.split(";").forEach((cookie) => {
            cookie = cookie.trim();
            if (cookie.startsWith(name + "=")) {
            cookieValue = decodeURIComponent(cookie.split("=")[1]);
            }
        });
        }
        return cookieValue;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/notes/api/create/", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body: JSON.stringify({ title, content }),
        }).then(() => navigate("/notes"));
    };

    return (
        <div style={{ fontFamily: "Arial", minHeight: "100vh", background: "#f8f9fa" }}>
        <nav style={{ background: "#343a40", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}> Notes App</span>
            <button onClick={() => navigate("/notes")} style={{ background: "transparent", border: "1px solid white", color: "white", padding: "6px 14px", borderRadius: "4px", cursor: "pointer" }}>Back</button>
        </nav>

        <div style={{ maxWidth: "500px", margin: "40px auto", background: "white", padding: "32px", borderRadius: "8px", border: "1px solid #ddd" }}>
            <h2 style={{ marginBottom: "24px" }}>Add New Note</h2>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{ width: "100%", padding: "10px", marginBottom: "16px", borderRadius: "6px", border: "1px solid #ddd", boxSizing: "border-box" }}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows="5"
                style={{ width: "100%", padding: "10px", marginBottom: "16px", borderRadius: "6px", border: "1px solid #ddd", boxSizing: "border-box" }}
            />
            <button type="submit" style={{ width: "100%", padding: "10px", background: "#198754", color: "white", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer" }}>Save Note</button>
            </form>
        </div>
        </div>
    );
}

export default AddNote;