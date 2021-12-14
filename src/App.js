import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { message, Modal } from "antd";
import Home from "./Home";
import Onboarding from "./Onboarding";
import Products from "./Products";
import Profile from "./Profile";
import Footer from "./Footer";
import Information from './Profile/Information';
import Location from './Profile/location';
import "./App.css";

function App() {
  const [firstOpen, setFirstOpen] = useState(false);
  const [locationModalClosed, setLocationModalClosed] = useState(false);

  const handleOk = () => {
    setFirstOpen(false);
    setLocationModalClosed(true);
    localStorage.setItem("firstOpen", false);
  };

  const handleCancel = () => {
    message.error('No! You must accept it!!');
  };

  useEffect(() => {
    const modalVisible = localStorage.getItem('firstOpen');
    if (!modalVisible) {
      setFirstOpen(true);
    } else {
      setLocationModalClosed(true);
    }
  }, []);

  const finishOnboarding = localStorage.getItem('finishOnboarding');

  return (
    <div className="App">
      <Modal
        title="Alert"
        visible={firstOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        wrapClassName="locationEnable-wrapper">
        <p>If you want to enable location?</p>
      </Modal>
      {locationModalClosed && !finishOnboarding && <Onboarding />}

      {locationModalClosed && (
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editPorfile" element={<Information />} />
            <Route path="/findLocation" element={<Location />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
