
const BASE_CONSULTA_URL = "http://localhost:8080/roomkless/consulta?filter=false&items=true&";
// const BASE_CATEGORIA_URL = "http://localhost:8080/roomkless/categoria/";
const BASE_ITEM_URL = "http://localhost:8080/roomkless/item/";

const sizeItems = 1;
let CategoriaPage: number = 0;
let ItemPage: number = 0;
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
        CategoriaPage = 1; //para cargar la nueva pagina en loadCategorias()
        ItemPage = 1; //para cargar la nueva pagina en loadItems()
        return data;
    } catch (error) {
        console.log(`Error al intentar acceder a ${url}`, error);
    }
};

export const loadCategorias = async (interPage: number) => {
    const url = BASE_CONSULTA_URL + `sizeItems=${sizeItems}&page=${interPage}&size=${size}`;

    try {
        const response = await fetch(url, confInit);
        if (!response.ok) throw new Error("Error en la solicitud");

        const json = await response.json();
        return json;
    } catch (error) {
        console.log(`Error al intentar acceder a ${url}`, error);
    }
}

export const loadMoreItems = async (CategoriaID: number, interPage: number) => {
    const url = BASE_ITEM_URL + `categorias/${CategoriaID}?page=${interPage}&size=${sizeItems}`;

    try {
        const response = await fetch(url, confInit);
        if (!response.ok) throw new Error("Error en la solicitud");

        const json = await response.json();
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

export async function HandleLoadMoreCategorias() {
    try {
        const getPagination = await loadCategorias(CategoriaPage);
        const getContent = getPagination.content;
        const getLastPage = getPagination.last;
        CategoriaPage++;
        return {content: getContent, lastPage: getLastPage};
    } catch (error) {
        console.log(`Error al intentar acceder a una propiedad de la paginacion del request`, error);
    }
}

export async function HandleLoadMoreItems(CategoriaID: number) {
    try {
        const getPagination = await loadMoreItems(CategoriaID, ItemPage);
        const getContent = getPagination.content;
        const getLastPage = getPagination.last;
        ItemPage++;
        return {content: getContent, lastPage: getLastPage};
    } catch (error) {
        console.log(`Error al intentar acceder a una propiedad de la paginacion del request`, error);
    }
}