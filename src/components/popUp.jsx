import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import adImage from "../assets/ad.webp"; 

const popUp = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasShownPopUp = localStorage.getItem("hasShownPopUp");
    if (!hasShownPopUp) {
      const timer = setTimeout(() => {
        setShowPopUp(true);
        localStorage.setItem("hasShownPopUp", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => setShowPopUp(false);

  const goToContact = () => {
    navigate("/contact#contact-form");
    setShowPopUp(false);
  };

  if (!showPopUp) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white w-150 rounded-lg shadow-lg p-6 text-center relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl font-bold rounded-full transition duration-300"
        >
          ×
        </button>
        <img src={adImage} alt="Advertisement" className="w-200 h-200 object-contain rounded-lg" loading="lazy" />
        <div className="my-4 text-2xl font-semibold">
          Train Your Child to be an AI Engineer!
        </div>
        <p className="text-lg text-gray-600 mb-2">
          Elite program for ages 12-18 • Only 10 students per cohort
        </p>
        <p className="text-base text-gray-600 mb-4">
          ₦200k investment • 95% Attendance = 10% Cashback • Top student gets 100% refund
        </p>
        <button
          onClick={goToContact}
          className="bg-[#0d1b6e] hover:bg-[#0d1b6e] text-white px-6 py-2 rounded transition text-xl font-normal"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default popUp;
