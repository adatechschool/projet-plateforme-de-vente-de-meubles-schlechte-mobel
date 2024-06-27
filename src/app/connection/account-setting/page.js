import React from "react";

const EmailInput = () => {
  return <input placeholder="Email:" />;
};

const PassWordInput = () => {
  return <input placeholder="Password:" />;
};

const ButtonNewConnection = () => {
  return (
    <button className="buttonNewConnection bg-[#050505] text-white text-lg rounded-md px-4 py-2 hover:bg-slate">
      Me connecter
    </button>
  );
};

const Checkbox = () => {
  return (
    <label>
      <input type="checkbox" />
      Se souvenir de moi
    </label>
  );
};

const AccountSettingPage = () => {
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/meublehome.jpg')] flex flex-col items-start justify-start w-full">
      <div className="flex-1 min-h-full backdrop-blur-sm bg-white/30 w-full flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/30 rounded-xl w-1/3 h-96 flex flex-col justify-center items-center gap-3">
          <p>
            <br />
          </p>
          <EmailInput />
          <PassWordInput />
          <ButtonNewConnection />
          <Checkbox />
        </div>
      </div>
    </div>
  );
};

export default AccountSettingPage;
