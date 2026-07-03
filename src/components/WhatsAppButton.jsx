import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "../config/program";

const WhatsAppButton = () => {
  return (
    <a
      href={`${WHATSAPP_LINK}?text=Hi%20IntelliGeeks%2C%20I%27d%20like%20to%20know%20more%20about%20your%20program.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
    >
      <FaWhatsapp className="text-2xl flex-shrink-0" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-medium">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
