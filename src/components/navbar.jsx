import React from "react";
// import styles from "./Footer.module.css"; // Utilisation de CSS Modules pour le style

function Navbar() {
  return (
    <footer className="flex absolute justify-between items-center p-6 top-20 h-14 w-full">
      <a href="/">Chaises</a>
      <a href="/">Fauteuils</a>
      <a href="/">Tables</a>
      <a href="/">Canapés</a>
      <a href="/">Armoires</a>
      <a href="/">lampes</a>
    </footer>
  );
}

export default Navbar;
