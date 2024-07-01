import Link from "next/link";
import React from "react";
import Input from "@/components/input";

const EmailInput = () => {
  return (
    <div>
      <label className="underline text-sm">Email:</label>
      <Input placeholder="Mon identifiant" type="email" />
    </div>
  );
};

const PassWordInput = () => {
  return (
    <div>
      <label className="underline text-sm">Mot de passe:</label>
      <Input placeholder="Mon mot de passe" type="passwword" />
    </div>
  );
};

const ButtonNewConnection = () => {
  return (
    <Link
      href="/"
      className="buttonNewConnection bg-[#050505] text-white text-lg rounded-md px-4 py-2 hover:bg-slate"
    >
      Me connecter
    </Link>
  );
};

const Checkbox = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <input type="checkbox" />
      <label>Se souvenir de moi</label>
    </div>
  );
};

const NewAccount = () => {
  return (
    <div className="flex justify-center items-center gap-4 text-sm hover:underline hover:cursor-pointer">
      <Link href="/connection/signup">
        <p>Je n'ai pas de compte</p>
      </Link>
    </div>
  );
};

const AccountSettingPage = () => {
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/meublehome.jpg')] flex flex-col items-start justify-start w-full">
      <div className="flex-1 min-h-full backdrop-blur-sm bg-white/30 w-full flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/30 rounded-xl w-1/3 h-96 flex flex-col justify-center items-center gap-3">
          <p className="text-xl font-bold">Je me connecte</p>
          <p>
            <br />
          </p>
          <EmailInput />
          <PassWordInput />
          <div className="my-3" />
          <ButtonNewConnection />
          <Checkbox />
          <NewAccount />
        </div>
      </div>
    </div>
  );
};

export default AccountSettingPage;
