import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/common/Header";
import Content from "./components/common/Content";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Content/>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
