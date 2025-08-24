import { createRoot } from "react-dom/client";
import "./index.css";

function start() {
  const root = createRoot(document.getElementById("root")!);
  root.render(<App />);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}

function App() {
  return (
    <div className="max-w-7xl mx-auto p-8 text-center 
     relative z-10 flex items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Hello!</h1>
    </div>
  );
}

