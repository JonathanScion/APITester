import dynamic from "next/dynamic";
import { OPTIMIZED_FONT_PROVIDERS } from "next/dist/shared/lib/constants";
import Image from "next/image";
import { Component, useState } from "react";

import Postman from "./Components/Postman";
import ShowAPIResults from "./Components/ShowAPIResults";


export default function TheSome() {
  return (    
    <>
    <Postman />    
    </>
  );
}



