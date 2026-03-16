import NavBar from "./NavBar";
import HeaderBanner from "./HeaderBanner";

import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Product() {
  return (
    <>
        <NavBar />
        <HeaderBanner title="Product" />

    </>
  );
}