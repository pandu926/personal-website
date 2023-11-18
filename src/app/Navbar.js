"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between text-white pt-7 px-10 ">
      <Link
        href="/"
        className=" text-sm font-bold md:font-extrabold md:text-2xl w-1/2 md:w-1/5 uppercase"
      >
        pandusubekti
      </Link>
      <div className="hidden flex justify-between text-slate-200 font-normal text-lg w-2/5 capitalize">
        <Link href="/">tentang</Link>
        <h1>/</h1>
        <Link href="/pendidikan">pendidikan</Link>
        <h1>/</h1>
        <h1>portofolio</h1>
        <h1>/</h1>
        <h1>kemampuan</h1>
      </div>
      <div className="border-solid border-2 border-red-500 rounded-lg -mt-2  ">
        <h1 className="px-4 pt-2 pb-2 text-sm md:text-base ">kontak saya</h1>
      </div>
    </nav>
  );
}
