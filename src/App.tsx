import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <main className="h-screen flex flex-col justify-between py-5">
      <Card />
      <Footer />
    </main>
  );
}

export default App;
