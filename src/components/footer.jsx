"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex items-center h-16 p-4 justify-between bottom-0 absolute w-full bg-indigo-300">
      <div className="flex items-center justify-center gap-3">
        <Instagram />
        <Twitter />
        <Facebook />
        <Linkedin />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Mail />
        Nous contacter
      </div>
      <div>Propriétaire</div>
    </div>
  );
};

export default Footer;
