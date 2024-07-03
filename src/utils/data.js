// fichier global des fonctions de fetch
import { useSearchParams } from "next/navigation";

export async function fetchCategories() {

    const params = useSearchParams();
    const id = params.get("id");

    try {
        const dataFetched = await fetch(`http://127.0.0.1:9090/furnitures/category?id=${id}`);
        const data = await dataFetched.json();
        console.log(data);

    } catch (error) {
        console.log(error)
    }
}