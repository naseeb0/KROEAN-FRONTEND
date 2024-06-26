import { useState, useEffect } from "react";
import axios from "axios";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import "antd/dist/reset.css"; // Import Ant Design styles

const App = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://app-korean.vercel.app/?emblCd=NP");
        console.log("API Response:", res.data); // Log the response
        setResponse(res.data);
      } catch (error) {
        console.error("Error fetching the data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : response === "DATE AAYOOOO" ? (
        <CheckCircleTwoTone twoToneColor="#52c41a" style={styles.icon} />
      ) : response === "CHHINA" ? (
        <CloseCircleTwoTone twoToneColor="#ff4d4f" style={styles.icon} />
      ) : (
        <p>Unexpected response</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  icon: {
    fontSize: "40vw", // Ensure the icon is large enough to be visible but not overflowing
  },
};

export default App;
