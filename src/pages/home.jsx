import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Dental Dost Search</h1>

        <button style={styles.button} onClick={() => navigate("/patient")}>
          Search by Patient ID
        </button>

        <button style={styles.button} onClick={() => navigate("/scan")}>
          Search by Scan ID
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #d4f7dc, #b2f2bb)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "350px",
  },
  heading: {
    color: "#1b5e20",
    marginBottom: "30px",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    backgroundColor: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
  },
};

export default Home;
