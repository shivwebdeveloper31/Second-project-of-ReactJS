import React from "react";
import { Redirect } from "react-router-dom";


import Dashboard from "../pages/Dashboard";
import LeadManagement from '../pages/LeadManagement/LeadManagement'
import Login from '../pages/LoginPage'
import Register from '../pages/RegisterPage'
import ForgotPassword from '../pages/RecoverPassword'
import AddLead from '../pages/LeadManagement/AddLead'
import Users from "../pages/Users"
import ShowLeads from '../pages/LeadManagement/ShowLeads'
import Invoice from '../pages/Invoice'
import Quotation from "../pages/Quotation";
import InvoiceUser from "../pages/InvoiceUser";
import QUser from "../pages/QUser";
import GetData from "../pages/GetData";
import GetDatanew from "../pages/GetDatanew";
import Form from "../pages/Form";

const authProtectedRoutes = [
  
  { path: "/leadManagement", component: LeadManagement },
  { path: "/dashboard", component: Dashboard },
  { path: "/add_lead", component: AddLead },
  { path: "/users", component: Users },
  { path: "/show_lead/:id", component: ShowLeads },
  { path: "/invoice", component: Invoice },
  { path: "/quotation", component: Quotation },
  { path: "/invoiceUser/:id", component: InvoiceUser },
  { path: "/quser/:id", component: QUser },
  { path: "/getdata", component: GetData },
  { path: "/getdatanew", component: GetDatanew },
  


  {path:"/login", component: Login,nav:true},
  {path:"/register", component: Register,nav:true},
  {path:"/forgotPassword", component: ForgotPassword,nav:true},
  { path: "/", exact: true, component: () => <Redirect to="/login" /> }
];


export { authProtectedRoutes };

