import React from "react";
import Image from "next/image";
import Head from "next/head";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import pic from "../public/Facebook.svg";
import logo from "../public/logo.jpg";
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
        <div className="flex  items-baseline justify-end">
          <div className="flex m-1 items-stretch">
            <HiPhone size="19" className="mt-1" />
            <p className="m-1 text-xs sm:text-xs md:text-xs lg:text-sm">
              samutcahika@gmail.com
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
              height="70"
              className="mr-3"
            />
          </div>
        </div>

        {/* School Heading */}
        <div className="grid grid-cols-6 ">
          <div>
            <Image
              src={logo}
              alt="facebook image"
              width="60"
              height="60"
              className="mx-2  p-1 rounded-xl"
            />
          </div>
          <div className="col-span-3 ">
            <p className="ml-4 font-sans font-semibold text-center text-base sm:text-base md:text-2xl lg:text-3xl ">
              Kasama Boys Secondary School
            </p>
          </div>

          <div className="hidden sm:block col-span-2 ">
            <div className="inline-flex ">
              <Link href="/form">
                <button className="sm:text-sm border border-blue-200 bg-blue-300 hover:bg-blue-400 m-1 rounded-lg p-1 font-serif shadow-sm">
                  Apply Now
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
              className="ml-16 mt-1 bg-slate-400 rounded-sm px-2 py-1 sm:invisible"
              onClick={toggleDrawer}
              aria-label="menu button"
            >
              <HiMenu size="25" />
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
        <div className="grid gap-2 bg-gradient-to-r from-indigo-500 justify-items-center m-3 p-4">
          <Image
            className="mt-1 rounded-2xl hover:cursor-pointer"
            src={pic}
            alt="school logo alphatech institute"
            width="45"
            height="45"
          />
          <p className="text-tiny2">"Computer Literacy is Our Priority"</p>
          <Link href="/">
            <button
              onClick={toggleDrawer}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-full"
            >
              Home Page
            </button>
          </Link>
          <Link href="/form">
            <button
              onClick={toggleDrawer}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-full"
            >
              Apply Now !
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
              Student Login
            </button>
          </a>
        </div>
      </Drawer>
    </>
  );
}

export default Header;
