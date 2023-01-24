import React from "react";
import Image from "next/image";
import Head from "next/head";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import pic from "../public/Facebook.svg";
import logo from "../public/logo.svg.png";
import { HiOutlineMail, HiPhone, HiMenu } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Head>
        <title>Kasama Boys School</title>
        <meta
          name="Kasama boys secondary school"
          content="school website for kasama boys secondary school"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* main */}
      <div className="h-12 fixed  top-0 z-10 bg-gradient-to-r from-slate-200 cursor-pointer shadow-2xl w-full">
        {/* Contact Details */}
        <div className="flex h-7 items-baseline justify-end">
          <div className="flex m-1 items-stretch">
            <HiPhone size="19" className="mt-1" />
            <p className="m-1 text-xs sm:text-xs md:text-xs lg:text-sm">
              +260 963495390
            </p>
          </div>
          <div className="flex m-1  items-stretch">
            <HiOutlineMail size="19" className="mt-1" />
            <p className=" m-1 text-xs  sm:text-xs md:text-xs lg:text-sm">
              samutcahika@gmail.com
            </p>
          </div>
          <div className="justify-items-center">
            <Image
              src={pic}
              alt="facebook image"
              width="70"
              height="60"
              className="mr-1"
            />
          </div>
        </div>

        {/* School Heading */}
        <div className="flex justify-evenly ">
          <div>
            <Link href="/">
              <Image
                src={logo}
                alt="coat of arms Zambia"
                className="sm:h-4 sm:w-4 md:h-16 md:w-16 h-16 w-20 object-contain"
              />
            </Link>
          </div>
          <div className="col-span-3">
            <p className="ml-4 font-sans font-semibold text-center text-base sm:text-base md:text-2xl lg:text-3xl ">
              Kasama Boys Secondary School
            </p>
          </div>

          <div className="hidden sm:block col-span-2 ">
            <div className="inline-flex ">
              <Link href="/form">
                <button className="sm:text-sm border border-blue-200 bg-blue-300 hover:bg-blue-400 m-1 rounded-lg p-1 font-serif shadow-sm">
                  Admin login
                </button>
              </Link>

              <a
                href="http://35.228.211.242/login/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="sm:text-sm border border-blue-200 bg-blue-300 hover:bg-blue-400 m-1 rounded-lg p-1 font-serif shadow-sm">
                  Student login
                </button>
              </a>
            </div>
          </div>
          <div>
            <button
              className="ml-10 mt-1 bg-blue-400 rounded-md px-2 py-1 sm:invisible"
              onClick={toggleDrawer}
              aria-label="menu button"
            >
              <HiMenu size="25" color="green" />
            </button>
          </div>
        </div>
      </div>

      {/* the drawer item  */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size="100vw"
      >
        <div className="grid gap-2 bg-gradient-to-r from-blue-400 justify-items-center m-3 p-4">
          <Image
            className="mt-1 rounded-2xl hover:cursor-pointer"
            src={logo}
            alt="coat of arms zambia"
            width="45"
            height="45"
          />
          <p className="text-tiny2">Umuntu Mutwe !</p>
          <Link href="/">
            <button
              onClick={toggleDrawer}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-full"
            >
              Home Page
            </button>
          </Link>
          <Link href="/">
            <button
              onClick={toggleDrawer}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-full"
            >
              Admin
            </button>
          </Link>
          <a
            href="http://35.228.211.242/login/"
            target="_blank"
            rel="noreferrer"
          >
            <button
              onClick={toggleDrawer}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-full"
            >
              Student Portal
            </button>
          </a>
        </div>
      </Drawer>
    </>
  );
}

export default Header;
