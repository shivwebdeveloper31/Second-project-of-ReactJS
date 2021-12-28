import React, { useState } from "react";
import "./Invoice.css";
import axios from 'axios'





const Form = () => {


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




  const { Date,
    Time,
    ProgramName,
    TeachingLocation,
    InstructorName,
    Email,
    D01,
    T01,
    A01,
    D02,
    T02,
    A02,
    SendPayment,
    Mail,
    Quickpay,
    Address,
    TotalHours,
    Attherate,
    TotalOwed,
    Check,
    DateIssued,
    Issuedto,
    Issuedby } = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [allcheckbox, setCheckboxes] = useState([]);
  const handlecheckbox = e => {
    setCheckboxes({ ...allcheckbox, [e.target.name]: e.target.checked });
  };

  
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    
  };
  return (
    <>

      <form onSubmit={e => onSubmit(e)}>
        <div className="upper">
          <div className="left">
            <div className="date">
              Date:
              <br />
              <input
                type="text"
                name="Date"
                value={Date}
                onChange={e => onInputChange(e)}
                placeholder=""
              ></input>
            </div>
            <br />
            <div className="time">
              Time:
              <br />
              <input
                type="text"
                name="Time"
                value={Time}
                onChange={e => onInputChange(e)}
                placeholder=""
              ></input>
            </div>
            <br />
            <div className="programname">
              Program Name:
              <br />
              <input
                type="text"
                name="ProgramName"
                value={ProgramName}
                onChange={e => onInputChange(e)}
                placeholder=""
              ></input>
            </div>
            <br />
            <div className="teachinglocation">
              Teaching Location:
              <br />
              <input
                type="text"
                name="TeachingLocation"
                value={TeachingLocation}
                onChange={e => onInputChange(e)}
                placeholder=""
              ></input>
            </div>
            <br />
            <div className="instructor">
              Instructor Name:
              <br />
              <input
                type="text"
                name="InstructorName"
                value={InstructorName}
                onChange={e => onInputChange(e)}
                placeholder=""
              ></input>
            </div>
            <br />
            <div className="email">
              Email:
              <br />
              <input
                type="email"
                name="Email"
                value={Email}
                onChange={e => onInputChange(e)}
                placeholder=""
              ></input>
            </div>
            <br />
          </div>
          <div className="right">
            <table border="1" cellPadding="5">
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Attendance</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="D01"
                    value={D01}
                    onChange={e => onInputChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="T01"
                    value={T01}
                    onChange={e => onInputChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="A01"
                    value={A01}
                    onChange={e => onInputChange(e)}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="D02"
                    value={D02}
                    onChange={e => onInputChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="T02"
                    value={T02}
                    onChange={e => onInputChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="A02"
                    value={A02}
                    onChange={e => onInputChange(e)}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="payment">
          <div className="text">
            Send Payment: <br />
            <input
              type="text"
              name="SendPayment"
              value={SendPayment}
              onChange={e => onInputChange(e)}
            ></input>
          </div>
          <div className="check">
            <input
              type="checkbox"
              name="Mail"
              value={Mail} 
              onChange={handlecheckbox} defaultChecked={allcheckbox.Mail === 1 ? true:false}
            />
            <span>Mail?</span>
            <input
              type="checkbox"
              name="Quickpay"
              value={Quickpay} 
              onChange={handlecheckbox} defaultChecked={allcheckbox.Quickpay === 1 ? true:false}
            ></input>
            Quickpay?
          </div>
        </div>
        <br />
        <div className="address">
          Address:
          <br />
          <input
            type="text"
            name="Address"
            value={Address}
            onChange={e => onInputChange(e)}
            placeholder=""
          ></input>
        </div>
        <br />
        <div className="total">
          <div className="hours">
            <div className="time">
              Total Hours:
              <br />
              <input
                type="text"
                name="TotalHours"
                value={TotalHours}
                onChange={e => onInputChange(e)}
              ></input>
            </div>
            <div className="attherate">
              @ <br />
              <input
                type="text"
                name="Attherate"
                value={Attherate}
                onChange={e => onInputChange(e)}
              ></input>
            </div>
          </div>
          <div className="owed">
            Total Owed:
            <br />
            <input
              type="text"
              name="TotalOwed"
              value={TotalOwed}
              onChange={e => onInputChange(e)}
            ></input>
          </div>
        </div>
        <br />
        <div className="box">
          <div className="leftbox">
            <b>Please Email as us attachment to:</b>
            <br />
            vishwajeetgupta517@gmail.com
            <br />
            <br />
            <b>
              Or Mail to:
              <br />
              Yoga By Design Foundation
              <br />
              PO Box 1099
              <br />
              Mumbai 400101
            </b>
            <br />
            <br />
            <a href="#">www.yogadesign.com</a>
          </div>
          <div className="rightbox">
            <b>Office Use Only:</b>
            <table border="1" cellPadding="5">
              <tr>
                <td>Check</td>
                <td>
                  <input
                    type="text"
                    name="Check"
                    value={Check}
                    onChange={e => onInputChange(e)}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Date Issued</td>
                <td>
                  <input
                    type="text"
                    name="DateIssued"
                    value={DateIssued}
                    onChange={e => onInputChange(e)}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Issued to</td>
                <td>
                  <input
                    type="text"
                    name="Issuedto"
                    value={Issuedto}
                    onChange={e => onInputChange(e)}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Issued by</td>
                <td>
                  <input
                    type="text"
                    name="Issuedby"
                    value={Issuedby}
                    onChange={e => onInputChange(e)}
                  ></input>
                </td>
              </tr>
            </table>
          </div>
        </div>


        <button className="submit" to="/getdata" type="submit">SUBMIT</button>



      </form>

    </>
  );
};

export default Form;
