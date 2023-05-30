import './Announcments.css'
import { useState, useEffect } from "react";
import axios from "axios";
export default function Annoucments(props) {
  const [announcements, setAnnouncements] = useState([]);
  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}getanouncment`;
    const result = await axios.get(serverUrl);
    setAnnouncements(result.data);
  };
  useEffect(() => {
    sendReq();
  }, [announcements]);
  return (
    <>
      <div className={`grid-container ${props.darkMode ? 'dark' : ''}`}>
        {announcements.map((item) => (
          <div className="announcement-card">
            <h4>{item.anouncment_title}</h4>
            <p>{item.anouncment_body}</p>
          </div>
        ))}
      </div>
    </>
  );
}