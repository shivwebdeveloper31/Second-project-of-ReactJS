import React, { useState } from "react";
import Stylesheet from "./Qform.css";
import axios from 'axios'

const Qform = () => {

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
    
    
    
    
      const { Date,
        Quotation,
        CompanyName,
        Address,
        GST,
        Email,
        Phone,
        remark,
        Transport,
        NumberofPackage,
        GrossWeight,
        SN1,
        Des1,
        HSN1,
        Quan1,
        Rate1,
        Amount1,
        SN2,
        Des2,
        HSN2,
        Quan2,
        Rate2,
        Amount2
         } = user;


        const onInputChange = e => {
            setUser({ ...user, [e.target.name]: e.target.value });
          };

          const onSubmit = async e => {
            e.preventDefault();
            await axios.post("http://localhost:3004/users1", user);
            
          };

    return (
        <>
            <div className="container"><br />
                <div className="header">
                    QUOTATION
                </div><br />
                <form onSubmit={e => onSubmit(e)}>
                    <div className="first">
                        <div className="date">
                            Date :
                            <input type="text" name="Date" value={Date} onChange={e => onInputChange(e)}></input>
                        </div><br />
                        <div className="Quotation">
                            Quotation No :
                            <input type="text" name="Quotation" value={Quotation} onChange={e => onInputChange(e)}></input>
                        </div>
                    </div><br />
                    <div className="box">
                        <div className="left-box">
                            <div className="title">
                                SHIPPER
                            </div>
                            <div className="body">
                                <b>Adventure Ranz Pvt.Ltd</b><br /><br />
                                Plot No. 44, Sector-20, Dwark<br />
                                Telefax: 011-55646525<br /><br />
                                Cell: +91645641236<br /><br />
                                Email: test@gmail.com<br /><br />
                                GSTIN : 078DFGHJ412421SF<br /><br />
                            </div>
                        </div>

                        <div className="right-box">
                            <div className="title">
                                RECEIVER
                            </div>
                            <div className="body">
                                <div className="name">
                                    <input type="text" name="CompanyName" value={CompanyName} onChange={e => onInputChange(e)} placeholder="Company name"></input>
                                </div><br />
                                <div className="address">
                                    <input type="text" name="Address" value={Address} onChange={e => onInputChange(e)} placeholder=" Company address"></input>
                                </div><br />
                                <div className="GST">
                                    <input type="text" name="GST" value={GST} onChange={e => onInputChange(e)} placeholder="GST"></input>
                                </div><br />
                                <div className="phone">
                                    <input type="text" name="Phone" value={Phone} onChange={e => onInputChange(e)} placeholder="Phone"></input>
                                </div><br />
                                <div className="email">
                                    <input type="text" name="Email" value={Email} onChange={e => onInputChange(e)} placeholder="email"></input>
                                </div><br />
                            </div>
                        </div>

                    </div>
                    <div className="remark">
                        NOTE/REMARK :<br />
                        <input type="text" name="remark" value={remark} onChange={e => onInputChange(e)} ></input>
                    </div>
                    <div className="small">
                        <table border="1" cellPadding="5" width="100%">
                            <tr>
                                <th>MODE OF TRANSPORT</th>
                                <th>TOTAL NO. OF PACKAGE'S</th>
                                <th>TOTAL GROSS WEIGHT</th>
                            </tr>
                            <tr>
                                <td><input type="text" name="Transport" value={Transport} onChange={e => onInputChange(e)}></input></td>
                                <td><input type="text" name="NumberofPackage" value={NumberofPackage} onChange={e => onInputChange(e)}></input></td>
                                <td><input type="text" name="GrossWeight" value={GrossWeight} onChange={e => onInputChange(e)}></input></td>
                            </tr>
                        </table>
                    </div>
                    <div className="big">
                        <table border="1" cellPadding="5" width="100%">
                            <tr>
                                <th>S.N</th>
                                <th>DESCRIPTION</th>
                                <th>HSN CODE</th>
                                <th>QUANTITY</th>
                                <th>RATE</th>
                                <th>AMOUNT</th>
                            </tr>
                            <tr>
                                <td><input type="text" name="SN1" value={SN1} onChange={e => onInputChange(e)}></input></td>
                                <td><input type="text" name="Des1" value={Des1} onChange={e => onInputChange(e)}></input></td>
                                <td><input type="text" name="HSN1" value={HSN1} onChange={e => onInputChange(e)}></input></td>
                                <td><input type="text" name="Quan1" value={Quan1} onChange={e => onInputChange(e)}></input></td>
                                <td><input type="text" name="Rate1" value={Rate1} onChange={e => onInputChange(e)}></input></td>
                                <td><input type="text" name="Amount1" value={Amount1} onChange={e => onInputChange(e)}></input></td>
                            </tr>
                            <tr>
                            <td><input type="text" name="SN2" value={SN2} onChange={e => onInputChange(e)}></input></td>
                                <td><input type="text" name="Des2" value={Des2} onChange={e => onInputChange(e)}></input></td>
                                <td><input type="text" name="HSN2" value={HSN2} onChange={e => onInputChange(e)}></input></td>
                                <td><input type="text" name="Quan2" value={Quan2} onChange={e => onInputChange(e)}></input></td>
                                <td><input type="text" name="Rate2" value={Rate2} onChange={e => onInputChange(e)}></input></td>
                                <td><input type="text" name="Amount2" value={Amount2} onChange={e => onInputChange(e)}></input></td>
                            </tr>
                            <tr>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                            </tr>
                            <tr>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                            </tr>
                            <tr>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                            </tr>
                            <tr>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                            </tr>
                            <tr>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>

                            </tr>
                        </table>
                        <div className="down">
                            <table border="1" cellPadding="5" width="100%">
                            <tr>
                                <th><b>Freight charges</b></th>
                                <td><input type="text"></input></td>
                            </tr>
                            <tr>
                            <th>TOTAL AMOUNT</th>
                                <td><input type="text"></input></td>
                            </tr>
                            <tr>
                            <th><b>SGST @ 9%</b></th>
                                <td><input type="text"></input></td>
                            </tr>
                            <tr>
                            <th><b>CGST @ 9%</b></th>
                                <td><input type="text"></input></td>
                            </tr>
                            <tr>
                            <th>GRAND TOTAL</th>
                                <td><input type="text"></input></td>
                            </tr>

                            </table>
                        </div>
                    </div>
                    <div className="thank">
                        <b>THANK YOU FOR YOUR BUSINESS!</b>
                        <div className="place">
                            Place : <br/>
                            <input type="text"></input>
                        </div>
                        <div className="enddate">
                            Date : <br/>
                            <input type="text"></input>
                        </div>
                    </div>

                    <button className="submit" to="/getdatanew" type="submit">SUBMIT</button>

                </form >
            </div>
        </>
    )
}

export default Qform;