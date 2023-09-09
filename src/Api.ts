export const BASE_URL = "http://localhost:8080/roomkless/consulta?filter=false&items=true&sizeItems=10&page=0&size=10";

export const consulta = async () => {
    try {
        const response = await fetch(`${BASE_URL}`, {
            mode: "cors",
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        // return response;
        return data;
    } catch (error) {
        console.log("Error:", error);
    }
};