
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Categoria {
    items: Array<Item>;
    numero_de_items: number;
    fecha_de_creacion: Date;
    id: string;
    nombre: string;
    visibilidad: boolean;
}

interface Item {
    id: number;
    fecha_de_creacion: Date;
    nombre: string;
    link: string;
    link_status: string;
    descripcion: string;
    visibilidad: boolean;
    etiqueta: string;
    visitas: number;
    ultima_visita: Date;
}
