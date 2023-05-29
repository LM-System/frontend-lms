import './Announcments.css'
import { useState, useEffect } from "react";
import axios from "axios";

export default function Annoucments(props) {
  const [annoucments, setAnnoucments] = useState([]);

  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}getanouncment`;
    const result = await axios.get(serverUrl);
    setAnnoucments(result.data);
  };

  useEffect(() => {
    sendReq();
  }, [annoucments]);

  return (
    <>
      <div className={`grid-container ${props.darkMode ? 'dark' : ''}`}>
        {annoucments.map((item) => (
          <div className="announcment-card">
            <h4>{item.anouncment_title}</h4>
            <p>{item.anouncment_body}</p>
          </div>
        ))}
      </div>
    </>
  );
}