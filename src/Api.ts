const BASE_CONSULTA_URL = "http://localhost:8080/roomkless/consulta?filter=false&items=true&";

const sizeItems = 1;
// let page = 0;
// const limitPage = 2;
const size = 1;

const confInit: RequestInit = {
    mode: "cors",
    credentials: "include",
}

export const consulta = async () => {
    // const url = BASE_CONSULTA_URL + `sizeItems=${sizeItems}&page=${page}&size=${size}`;
    const url = BASE_CONSULTA_URL + `sizeItems=${sizeItems}&page=0&size=${size}`;

    try {
        //TODO: crear una respuesta corecta cuendo la api no esta disponible
        const response = await fetch(url, confInit);
        if (!response.ok) throw new Error("Error en la solicitud");

        const data = await response.json();
        // page++; //para cargar la nueva pagina en loadCategorias()
        return data;
    } catch (error) {
        console.log("Error:", error);
    }
};

export const loadCategorias = async (page: number) => {
    // let interPage = 1;
    const url = BASE_CONSULTA_URL + `sizeItems=${sizeItems}&page=${page}&size=${size}`;

    try {
        const response = await fetch(url, confInit);
        if (!response.ok) throw new Error("Error en la solicitud");

        const json = await response.json();
        // interPage++; //obtener el numero de paginas y limitarlo
        return json;
    } catch (error) {
        console.log("Error al llamar a la api", error);
    }
}