import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNote() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();



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
        <div className="container mt-5">
        <h2>Add Note</h2>

        <input
            className="form-control mb-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
            className="form-control mb-2"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />

        <button className="btn btn-success" onClick={handleSubmit}>
            Save Note
        </button>
        </div>
    );
}

export default AddNote;