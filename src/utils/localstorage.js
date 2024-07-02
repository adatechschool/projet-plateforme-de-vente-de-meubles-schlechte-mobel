export const localstorageKey = {
  isLogin: "isLogin",
};

export const LocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    const data = localStorage.getItem(key);

    try {
      //Nous permet de retrouver le vrai type car localstorage.setItem ne prend que des string.
      return JSON.parse(data);
    } catch {
      //Si le JSON.parse échoue, ça veut dire que l'on ne peut pas parser.
      //=> on retourne la valeur telle quelle.
      return data;
    }
  },
};
