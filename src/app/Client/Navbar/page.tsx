"use client";
import { MdPostAdd } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi2";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import React, { useRef ,useState, useEffect } from "react";
import Sheet from "./Sheet/page";

interface NavbarItem {
  id: number;
  name: string;
  label: any;
  link: string;
}

const Navbar = () => {
  const navItems: NavbarItem[] = [
    { id: 1, name: "Home", label: <HiOutlineHome />, link: "/" },
    { id: 2, name: "Messenger", label: <FiMessageSquare />, link: "/" },
    { id: 3, name: "Notification", label: <IoIosNotifications />, link: "/" },
    { id: 4, name: "Post", label: <MdPostAdd />, link: "/" },
    { id: 5, name: "Profile", label: <IoMdContact />, link: "/" },
  ];
  // const windowWidth = useRef(window.innerWidth);
  // const windowHeight = useRef(window.innerHeight);
  // if (windowWidth = 760) {
  //   const widthPage =true;

  // }
  // const [windowSize, setWindowSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });

  // useEffect(() => {
  //   // Handler to call on window resize
  //   const handleResize = () => {
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   };

  //   // Add event listener
  //   window.addEventListener('resize', handleResize);

  //   // Call handler right away so state gets updated with initial window size
  //   handleResize();

  //   // Remove event listener on cleanup
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);
  // console.log("width: ", windowWidth.current);
  // console.log("height: ", windowHeight.current);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])


  return (
    <div className=" bg-purple-600 text-white px-2  flex items-center mb-10 justify-between overflow-hidden h-16">
      <div className="logo text-2xl">JobCraft</div>
      {screenSize.dynamicWidth > 860 ? (
        <div className="flex items-center gap-5 items-  overflow-hidden">
          {navItems.map((item) => (
            <div key={item.id} className="nav  overflow-hidden text-center text-xs ">
              <Link href={item.link} passHref>
                <Button
                  className="hover:text-gray-300 text-xl text-white"
                  variant="link"
                  aria-label={item.name}
                >
                  {item.label}
                </Button>
                <p className="sr-onl cursor-default">{item.name}</p>

              </Link>
            </div>
          ))}
          <Link href="/" passHref>
            <Button className=" text-black" variant="outline">Login</Button>
          </Link>
        </div>
      ) : (
        <Sheet />
      )}
    </div>
  );
};

export default Navbar;
