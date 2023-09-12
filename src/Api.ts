
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
        console.log(`Error al intentar acceder a ${url}`, error);
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
        console.log(`Error al intentar acceder a ${url}`, error);
    }
}

//HANDLERS
export async function handleConsulta(): Promise<Categoria[]> {
    try {
        const getPagination = await consulta(); //obtiene la paginación de categorías
        const getContent = getPagination.content || []; //obtiene el content de la paginación: Array<Categoria>
        // console.log(getContent);
        // console.log(getPagination);
        // console.log(getPagination.last);
        return getContent;
    } catch (error) {
        console.log(`Error al intentar acceder a una propiedad de la paginacion del request`, error);
        return [];
    }
}

let page: number = 1;
export async function HandleLoadConsulta() {
    try {
        const getPagination = await loadCategorias(page);
        const getContent = getPagination.content;
        const getLastPage = getPagination.last;
        page++;
        return {content: getContent, lastPage: getLastPage};
    } catch (error) {
        console.log(`Error al intentar acceder a una propiedad de la paginacion del request`, error);
        return {};
    }
}