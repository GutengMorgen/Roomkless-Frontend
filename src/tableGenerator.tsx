import { useEffect, useState } from 'react';
import * as api from './Api';

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

interface Categoria {
    items: Array<Item>;
    numero_de_items: number;
    fecha_de_creacion: Date;
    id: string;
    nombre: string;
    visibilidad: boolean;
}

// function getJson(){
//     const getJson = await api.loadCategorias();
//     const getContent = getJson.content;

// }

const handleConsulta = async () => {
    const getJson = await api.consulta(); //obtiene la paginacion de categorias
    const getContent = getJson.content; //obtiene el content de la paginacion: Array<Categoria>
    console.log(getContent);
};


function TableItems(props: {datos: Array<Item>}){
    
    // console.log(props.datos);
    return(
        <tbody>
            {
                props.datos.map((item: Item, index: number) => (
                    <tr key={`${item.id}_${index}`}
                        data-fecha_de_creacion={item.fecha_de_creacion}
                        data-descripcion={item.descripcion}
                        data-visibilidad={item.visibilidad}
                        data-etiqueta={item.etiqueta}
                        data-visitas={item.visitas}
                        data-ultima_visita={item.ultima_visita}>
                        <td>{item.nombre}</td>
                        <td>{item.link}</td>
                        <td>{item.link_status}</td>
                    </tr>
                ))
            }
        </tbody>
    );
}

export default function TableGenerator() {
    const [myTable, setMyTable] = useState([]);

    //STRICT MODE ELIMINADO PARA EVITAR LA DOBLE LLAMADA A LA API
    useEffect(() => {
        async function fetchData() {
            try {
                const consulta = await api.consulta();
                const getContent = consulta.content;
                // const getItems = consulta.content[0].items;
                // console.log(getContent);

                const tables = getContent.map((categoria: Categoria, index: number) => (
                    <table className='categorias' key={`${categoria.id}_${index}`}>
                        <thead>
                            <tr>
                                <th 
                                colSpan={3}
                                data-id={categoria.id}
                                data-fecha-creacion={categoria.fecha_de_creacion}
                                data-visibilidad={categoria.visibilidad}
                                data-numero-items={categoria.numero_de_items}>
                                    {categoria.nombre}
                                </th>
                            </tr>
                            <tr>
                                <th>Nombre</th>
                                <th>Link</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <TableItems datos={categoria.items}/>
                        <tfoot>
                            <tr>
                                <th colSpan={3}>Load more...</th>
                            </tr>
                        </tfoot>
                    </table>
                ));

                setMyTable(tables);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            {myTable}
        </>
    );
}
