"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 z-50 w-full flex items-center justify-center bg-[#b77955]">
      <div className="w-full flex items-center justify-between p-4">
        <div className="flex items-center justify-center gap-3">
          <a href="/instagram">
            <Instagram className="cursor-pointer" />
          </a>
          <a href="/twitter">
            <Twitter className="cursor-pointer" />
          </a>
          <a href="/facebook">
            <Facebook className="cursor-pointer" />
          </a>
          <a href="/linkedin">
            <Linkedin className="cursor-pointer" />
          </a>
        </div>
        <div className="flex justify-center items-center gap-1">
          <a href="/mail">
            <Mail className="cursor-pointer" />
          </a>
          <a className="cursor-pointer">Nous contacter</a>
        </div>
        <a href="proprietaire">Propriétaire</a>
      </div>
    </footer>
  );
};

export default Footer;
