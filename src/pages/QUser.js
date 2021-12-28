import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const QUser = () => {
    const [user, setUser] = useState({
        Date: " ",
        Quotation: " ",
        CompanyName: " ",
        Address: " ",
        GST: " ",
        Email: " ",
        Phone: " ",
        remark: " ",
        Transport: " ",
        NumberofPackage: " ",
        GrossWeight: " ",
        SN1: " ",
        Des1: " ",
        HSN1: " ",
        Quan1: " ",
        Rate1: " ",
        Amount1: " ",
        SN2: " ",
        Des2: " ",
        HSN2: " ",
        Quan2: " ",
        Rate2: " ",
        Amount2: " "
        
      });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3004/users1/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
    
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Date: {user.Date}</li>
        <li className="list-group-item">Quotation No: {user.Quotation}</li>
        <li className="list-group-item">Company Name: {user.CompanyName}</li>
        <li className="list-group-item">Address: {user.Address}</li>
        <li className="list-group-item">GST: {user.GST}</li>
        <li className="list-group-item">Email: {user.Email}</li>
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

export default QUser;