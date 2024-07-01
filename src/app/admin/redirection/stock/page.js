const ButtonValidation = () => {
  return (
    <button className="buttonNewConnection bg-[#050505] text-white text-lg rounded-md px-4 py-2 hover:bg-slate">
      Valider
    </button>
  );
};

const ButtonDenied = () => {
  return (
    <button className="buttonNewConnection bg-[#050505] text-white text-lg rounded-md px-4 py-2 hover:bg-slate">
      Refuser
    </button>
  );
};

const Card = ({ title }) => {
  return (
    <div className="backdrop-blur-sm bg-white/10 rounded-xl w-2/3 h-96 flex flex-col justify-center items-center gap-3 mx-auto my-4">
      <p className="text-xl font-bold">{title}</p>
      <div className="my-6" />
      <div className="flex flex-row gap-6">
        <ButtonValidation />
        <ButtonDenied />
      </div>
    </div>
  );
};

const AdminRedirection = () => {
  const cardsData = [
    { id: 1, title: "Annonce 1" },
    { id: 2, title: "Annonce 2" },
    { id: 3, title: "Annonce 3" },
    { id: 4, title: "Annonce 4" },
    { id: 5, title: "Annonce 5" },
    { id: 6, title: "Annonce 6" },
  ];

  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/admin.jpg')] flex flex-col items-start justify-start w-full">
      <div className="flex-1 min-h-full bg-white/10 w-full flex flex-col items-center justify-start py-10">
        {cardsData.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default AdminRedirection;
