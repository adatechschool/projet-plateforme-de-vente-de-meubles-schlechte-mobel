// fichier global des fonctions de fetch
export async function fetchItem(id) {
    const url = `localhost:9090/furnitures/?${id}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status ${response.status}`);
        }
        const item = await response.json();
        console.log(item);
        return item;


    } catch (error) {
        console.log(error.message);
    }



} 
//exportation de la fonction
//export default { fetchItem };