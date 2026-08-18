import { FaWhatsapp } from 'react-icons/fa';

export function FloatingWhatsApp() {
  const phoneNumber = "917733866682"; 
  const message = "Hi Sachin, I saw your portfolio and would like to connect!";
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Continuous Ping Animation Effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 duration-1000"></div>
      
      {/* Icon scaled up to fill the container and reduce padding */}
      <FaWhatsapp className="w-10 h-10 relative z-10" />
      
      {/* Tooltip moved to the left side */}
      <span className="absolute right-full mr-4 px-3 py-2 bg-card border border-border text-text-primary text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
        Chat on WhatsApp
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-card border-r border-t border-border rotate-45"></div>
      </span>
    </a>
  );
}
