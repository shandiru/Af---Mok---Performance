import { useState, useEffect } from "react";

export default function GDPRBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or rejected
    const consent = localStorage.getItem("gdprConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false"); // optional
    setVisible(false);
  };

  if (!visible) return null; // Hide if already accepted/rejected

  return (
    <div
      className="fixed bottom-0 left-0 w-full 
      bg-[#0B1120] text-white 
      p-6 text-center shadow-lg border-t border-gray-700
      z-50"
    >
      <p className="mb-4 text-gray-300 leading-relaxed">
        We use cookies to improve your experience.{" "}
        <a
          href="/privacy-policy"
          className="underline font-semibold text-[#00D4FF] hover:text-[#FF6B6B] transition-colors"
        >
          Learn more
        </a>
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {/* Accept Button - Gradient */}
        <button
          onClick={handleAccept}
          className="px-8 py-3 rounded-md font-semibold text-white
          bg-gradient-to-r from-[#00D4FF] to-[#FF6B6B]
          hover:opacity-90 transition"
        >
          Accept Cookies
        </button>

        {/* Reject Button - Neutral Gray */}
        <button
          onClick={handleReject}
          className="px-8 py-3 rounded-md font-semibold 
          bg-gray-600 text-white hover:bg-gray-500 transition"
        >
          Reject Cookies
        </button>
      </div>
    </div>
  );
}
