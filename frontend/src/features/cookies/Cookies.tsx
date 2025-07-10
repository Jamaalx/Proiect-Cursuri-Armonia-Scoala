import { useState } from "react";

export default function Cookies() {
  const [show, setShow] = useState(true);

  if (!show) return null;
  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white w-[90%] max-w-sm p-6 rounded-2xl shadow-2xl border text-center z-50">
      <div className="flex justify-center mb-4">
        <img src="/images/cookie.png" alt="Cookie" className="w-20 h-20" />
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Our website uses cookies</h2>
      <p className="text-gray-600 text-sm mb-4">
        Our website uses cookies. By continuing, we assume your permission to deploy
        cookies as detailed in our{" "}
        <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
      </p>

      <div className="flex flex-col justify-center gap-3 mt-4">
        <button
          className="text-gray-500 underline hover:text-gray-700 transition"
          onClick={() => setShow(false)}
        >
          Decline cookies
        </button>
        <button
          className="bg-green-secondary hover:bg-green-500 text-white rounded-full px-5 py-4 font-semibold transition"
          onClick={() => setShow(false)}
        >
          Accept cookies
        </button>
      </div>
    </div>
  );
}