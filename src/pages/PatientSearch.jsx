import { useState } from "react";

function PatientSearch() {
  const [patientId, setPatientId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    const url = `https://api-server.dentaldost.co/outbound/v1/patients/${patientId}/scans?page=1&limit=5&showResult=true&startDate=${startDate}&endDate=${endDate}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
      });

      const result = await response.json();
      setData(result);
    } catch (error) {
      alert("Error fetching data");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Search by Patient ID</h2>

        <input
          style={styles.input}
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />

        <input
          type="date"
          style={styles.input}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          style={styles.input}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <button style={styles.button} onClick={handleSearch}>
          Search
        </button>

        {data && (
          <div style={styles.resultBox}>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
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
    width: "400px",
    textAlign: "center",
  },
  heading: {
    color: "#1b5e20",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  resultBox: {
    marginTop: "20px",
    backgroundColor: "#f1f8e9",
    padding: "10px",
    borderRadius: "6px",
    maxHeight: "200px",
    overflowY: "auto",
    textAlign: "left",
    fontSize: "12px",
  },
};

export default PatientSearch;
