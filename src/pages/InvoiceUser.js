import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const InvoiceUser = () => {
  const [user, setUser] = useState({
    Date: " ",
    Time: " ",
    ProgramName: " ",
    TeachingLocation: " ",
    InstructorName: " ",
    Email: " ",
    D01: " ",
    T01: " ",
    A01: " ",
    D02: " ",
    T02: " ",
    A02: " ",
    SendPayment: " ",
    Mail: " ",
    Quickpay: " ",
    Address: " ",
    TotalHours: " ",
    Attherate: " ",
    TotalOwed: " ",
    Check: " ",
    DateIssued: " ",
    Issuedto: " ",
    Issuedby: " ",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
    
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Date: {user.Date}</li>
        <li className="list-group-item">Time: {user.Time}</li>
        <li className="list-group-item">Program Name: {user.ProgramName}</li>
        <li className="list-group-item">InstructorName: {user.InstructorName}</li>
        <li className="list-group-item">Email: {user.Email}</li>
        <li className="list-group-item">Sr.NO1-Date: {user.D01}</li>
        <li className="list-group-item">Sr.NO1-Time: {user.T01}</li>
        <li className="list-group-item">Sr.NO1-Attendance: {user.A01}</li>
        <li className="list-group-item">Sr.NO2-Date: {user.D02}</li>
        <li className="list-group-item">Sr.NO2-Time: {user.T02}</li>
        <li className="list-group-item">Sr.NO2-Attendance: {user.A02}</li>
        <li className="list-group-item">Send Payment: {user.SendPayment}</li>
        <li className="list-group-item">Mail: {user.Mail}</li>
        <li className="list-group-item">Quickpay: {user.Quickpay}</li>
        <li className="list-group-item">Address: {user.Address}</li>
        <li className="list-group-item">Total Hours: {user.TotalHours}</li>
        <li className="list-group-item">Total Owed: {user.TotalOwed}</li>
        <li className="list-group-item">Check: {user.Check}</li>
        <li className="list-group-item">Date Issued: {user.DateIssued}</li>
        <li className="list-group-item">Issued to: {user.Issuedto}</li>
        <li className="list-group-item">Issued by: {user.Issuedby}</li>
      </ul>
    </div>
  );
};

export default InvoiceUser;