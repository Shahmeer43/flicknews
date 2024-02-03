import React from "react";
import Slider from "../Components/Slider";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar page="Home" />
      <Slider />
    </div>
  );
}
