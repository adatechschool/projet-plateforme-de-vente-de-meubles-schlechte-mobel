import React from "react";

const EmailInput = () => {
  return <input placeholder="Email:" />;
};

const PassWordInput = () => {
  return <input placeholder="Password:" />;
};

const Checkbox = () => {
  return (
    <label>
      <input type="checkbox" />
      Se souvenir de moi
    </label>
  );
};

const ButtonNewConnection = () => {
  return <button className="buttonNewConnection">Créer mon compte</button>;
};

const AccountSettingPage = () => {
  return (
    <div>
      <p>
        Je suis nouveau client.e <br />
        Créer mon compte
      </p>
      <ButtonNewConnection />
      <p>
        Je suis déjà client.e
        <br />
        Me connecter
      </p>
      <EmailInput />
      <PassWordInput />
      <Checkbox />
      <header />
    </div>
  );
};
export default AccountSettingPage;
