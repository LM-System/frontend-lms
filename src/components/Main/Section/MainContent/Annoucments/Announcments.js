import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Style from "./Announcments.css";

export default function Annoucments() {
  const [annoucments, setAnnoucments] = useState([]);

  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}getanouncment`;
    const result = await axios.get(serverUrl);
    // console.log(result.data);
    setAnnoucments(result.data);
  };

  useEffect(() => {
    sendReq();
  }, [annoucments]);

  return (
    <>
      <div className="grid-container ">
        {annoucments.map((item, idx) => (
          <div className="row">
            <div className="card">
              <h4>{item.anouncment_title}</h4>
              <p>{item.anouncment_body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
