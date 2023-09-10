const BASE_CONSULTA_URL = "http://localhost:8080/roomkless/consulta?filter=false&items=true&";

const sizeItems = 1;
let page = 0;
const size = 1;

const confInit: RequestInit = {
    mode: "cors",
    credentials: "include",
}

export const consulta = async () => {
    const url = BASE_CONSULTA_URL + `sizeItems=${sizeItems}&page=${page}&size=${size}`;

    try {
        //TODO: crear una respuesta corecta cuendo la api no esta disponible
        const response = await fetch(url, confInit);
        if (!response.ok) throw new Error("Error en la solicitud");

        const data = await response.json();
        page = 1; //para cargar la nueva pagina en loadCategorias()
        return data;
    } catch (error) {
        console.log("Error:", error);
    }
};

export const loadCategorias = async () => {
    const url = BASE_CONSULTA_URL + `sizeItems=${sizeItems}&page=${page}&size=${size}`;

    try {
        const response = await fetch(url, confInit);
        if (!response.ok) throw new Error("Error en la solicitud");

        const json = await response.json();
        return json;
    } catch (error) {
        console.log("Error al llamar a la api", error);
    }
}