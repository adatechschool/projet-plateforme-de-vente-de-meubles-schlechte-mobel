import React from "react";

const SellingFurniture = () => {
  return (
    <label>
      Catégorie: <input name="MyCategory" />
      Matériau: <input name="MyMaterial" />
      Etat: <input name="State" />
      Couleur: <input name="Color" />
      Dimensions: <input name="Dimensions" />
      Prix: <input name="MyPrice" />
      Photo: <input name="MyPhoto" />
    </label>
  );
};

const FormSellingFurniture = () => {
  return (
    <div>
      <p>Je veux vendre mon meuble</p>
      <SellingFurniture />
    </div>
  );
};

export default FormSellingFurniture;
