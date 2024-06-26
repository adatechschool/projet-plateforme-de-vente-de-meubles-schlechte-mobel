import React from "react";

const MyAccount = () => {
  return (
    <div className="justify-center flex flex-col items-center">
      <div className="justify-center flex flex-col items-center">
        <label>Nom:</label>
        <input name="MyName" />
        <label>Prénom:</label>
        <input name="MyFirstname" />
        <div className="gap-1 text-sm font-medium flex items-start justify-center flex-col">
          <label className="underline">Mail</label>
          <input
            name="MyEmail"
            className="border h-8 text-sm shadow-sm rounded-lg p-2"
            placeholder="acme@email.fr"
            type="email"
          />
        </div>
        <label>Mot de passe:</label>
        <input name="MyPassword" type="password" />
        <label>Adresse:</label>
        <input name="MyAdress" />
        <label>Tel:</label>
        <input name="MyTel" />
      </div>
      <button className="bg-black text-white text-sm rounded-md px-4 py-2 hover:bg-slate">
        Valider
      </button>
    </div>
  );
};

const FormNewAccount = () => {
  return (
    <div className="justify-center flex flex-col items-center">
      <h1 className="text-lg font-black ">Créer mon compte</h1>
      <MyAccount />
    </div>
  );
};

export default FormNewAccount;
