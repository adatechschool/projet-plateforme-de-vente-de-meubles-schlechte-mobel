//import { Input } from "postcss";
import Input from "@/components/input";

const AdminLogin = () => {
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/admin.jpg')]"></div>
  );
};

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
    <button className="buttonNewConnection bg-[#050505] text-white text-lg rounded-md px-4 py-2 hover:bg-slate">
      Me connecter
    </button>
  );
};

const AdminPage = () => {
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/admin.jpg')] flex flex-col items-start justify-start w-full">
      <div className="flex-1 min-h-full bg-white/10 w-full flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/10 rounded-xl w-1/3 h-96 flex flex-col justify-center items-center gap-3">
          <p>
            <br />
          </p>
          <EmailInput />
          <PassWordInput />
          <ButtonNewConnection />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
