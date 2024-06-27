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
    <header className="sticky top-0 z-50 w-full flex items-center justify-center bg-[#ffedd8]">
      <div className="w-full flex items-center justify-between p-4">
        <h1 className="text-lg font-black">Schlecht Möbel</h1>
        {afficheInput()}
        <div className="flex items-center justify-center gap-3">
          <a href="/user">
            <User className="cursor-pointer" />
          </a>
          <a href="/cart">
            <ShoppingBasket className="cursor-pointer" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
