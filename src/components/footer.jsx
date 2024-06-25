import React from "react";
// import styles from "./Footer.module.css"; // Utilisation de CSS Modules pour le style

function Footer() {
  return (
    <footer className="flex absolute justify-between items-center p-4 bottom-0 h-14 w-full bg-red-500">
      <a href="/">Nos réseaux</a>
      <a href="/about">Nous contacter</a>
      <a href="/contact">Propriétaire</a>
    </footer>
  );
}

export default Footer;
