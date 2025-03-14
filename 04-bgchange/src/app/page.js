"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState('white');


  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>


        <div className="fixed flex flex-wrap gap-8 justify-center bottom-12 inset-x-0 px-2">
          <button type="button" className="outline-none px-4 py-1 shadow-lg rounded-md text-white"
            style={{ backgroundColor: "orange" }}
            onClick={() => { setColor("orange") }}>
            orange</button>
          <button type="button" className="outline-none px-4 py-1 shadow-lg rounded-md text-white"
            style={{ backgroundColor: "pink" }}
            onClick={() => { setColor("pink") }}>
            pink</button>
          <button type="button" className="outline-none px-4 py-1 shadow-lg rounded-md text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => { setColor("green") }}>
            Green</button>
          <button type="button" className="outline-none px-4 py-1 shadow-lg rounded-md text-white"
            style={{ backgroundColor: "orangered" }}
            onClick={() => { setColor("red") }}>
            red</button>
          <button type="button" className="outline-none px-4 py-1 shadow-lg rounded-md text-white"
            style={{ backgroundColor: "blue" }}
            onClick={() => { setColor("blue") }}>
            blue</button>

        </div>
      </div>

    </>
  );
}
