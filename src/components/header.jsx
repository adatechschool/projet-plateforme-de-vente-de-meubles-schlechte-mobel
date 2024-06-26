"use client";

import { Search, ShoppingBasket, User } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  /**
   * Je n'affiche l'input que si mon url ne contient qu'un /
   * sinon, je ne l'affiche pas.
   * => Conditional rendering: https://fr.legacy.reactjs.org/docs/conditional-rendering.html
   **/
  const afficheInput = () => {
    if (pathname !== "/") {
      return null;
    }

    return (
      <div className="flex items-center justify-center gap-2">
        <Search className="size-4" />
        <input
          className="rounded-md text-sm p-1"
          placeholder="Rechercher qqch..."
        />
      </div>
    );
  };

  return (
    <div className="flex items-center h-16 p-4 justify-between bg-indigo-300">
      <h1 className="text-lg font-black">Schlecht Möbel</h1>
      {afficheInput()}
      <div className="flex items-center justify-center gap-3">
        <User />
        <ShoppingBasket />
      </div>
    </div>
  );
};

export default Header;
