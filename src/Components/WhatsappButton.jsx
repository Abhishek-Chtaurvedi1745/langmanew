import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+919810117094"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative flex items-center justify-center">
        
        {/* Pulse Animation */}
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-75 animate-ping"></span>

        {/* Main Button */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-2xl hover:scale-110 transition-transform duration-300">
          <img src="/langma/images/wts1.png" alt="" className=" h-14 w-14" />
        </div>
      </div>
    </a>
  );
}