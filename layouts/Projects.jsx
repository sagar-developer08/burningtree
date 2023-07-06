import React from 'react';
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Carousel from './CarouselComponent';
import P1 from './P1';



const Layout = () => {
  return(
    <>
      <P1/>
      
      <Carousel/>
    </>
  )
}

export default Layout;
