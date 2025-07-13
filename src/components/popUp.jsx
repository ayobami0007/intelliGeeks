import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
const popUp = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() =>{
            setShowPopUp(true);
        }, 1000)

        return() => clearTimeout(timer);
    }, []);

     const handleClose = () => setShowPopUp(false);


const goToContact= () =>{
    navigate('/contact#contact-form')
    setShowPopUp(false)
}

     if(!showPopUp) return null;

  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white max-w-md w-full rounded-lg shadow-lg p-6 text-center relative">
         <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-lg font-bold"
        > ×
        </button>
         <h3 className="text-xl font-semibold mb-3">🚀 Ready to Enrol Your Child?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Start their journey into AI and coding with our interactive program.
        </p>
         <button
          onClick={goToContact}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
        >
          Get Started
        </button>
         </div>
    </div>
  )
}

export default popUp