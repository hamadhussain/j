import React from "react";
import Navbar from './Navbar/page'

export default function Layout({ children ,}: { children: React.ReactNode }) {
  console.log("Layout rendered"); // Debug message

  return (
    <>
      {/* <div className=" text-black flex flex-col w-screen text-center"> */}
<Navbar/>
      {children}
      {/* <h1 className=" text-black">lkdsjndsm</h1> */}
      {/* </div> */}
    </>
  );
}
