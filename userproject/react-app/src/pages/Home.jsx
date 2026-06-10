import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
    <div style={{ fontFamily: "Arial", minHeight: "100vh", background: "#f8f9fa" }}>
        <nav style={{ background: "#343a40", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}> Notes App</span>
        </nav>

        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1 style={{ fontSize: "36px" }}>Welcome to Notes App </h1>
            <p style={{ color: "gray", marginBottom: "32px" }}>Manage your notes easily</p>
            <button
            onClick={() => navigate("/notes")}
            style={{ padding: "12px 24px", fontSize: "16px", background: "#0d6efd", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", marginRight: "12px" }}
            >
            My Notes
            </button>
            <button
            onClick={() => navigate("/notes/add")}
            style={{ padding: "12px 24px", fontSize: "16px", background: "#198754", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
            >
            Add Note
            </button>
        </div>
        </div>
    );
}

export default Home;