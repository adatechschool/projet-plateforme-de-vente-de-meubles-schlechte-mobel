import React from "react";
// import styles from "./Footer.module.css"; // Utilisation de CSS Modules pour le style

function Navbar() {
  return (
    <div className="flex justify-between items-center p-6 h-14 w-full bg-[#ffedd5] border-t-2 border-[#b77955]">
      <a href="/">Chaises</a>
      <a href="/">Fauteuils</a>
      <a href="/">Tables</a>
      <a href="/">Canapés</a>
      <a href="/">Armoires</a>
      <a href="/">Lampes</a>
    </div>
  );
}

export default Navbar;
