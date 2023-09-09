import { useEffect, useState } from 'react';
import * as api from './Api';

// interface Item {
//     nombre: string;
//     link: string;
//     link_status: string;
// }

interface Categoria {
    numero_de_items: number;
    fecha_de_creacion: Date;
    id: string;
    nombre: string;
    visibilidad: boolean;
}

export default function TableGenerator() {
    const [myTable, setMyTable] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const consulta = await api.consulta();
                // const getContent = consulta.content[0];
                // const getItems = consulta.content[0].items;
                console.log(consulta.content);

                const tables = consulta.content.map((categoria: Categoria, index: number) => (
                    <>
                        {/* <ul key={`${categoria.id}_${index}`}>
                            <li>{categoria.id}</li>
                            <li>{categoria.nombre}</li>
                            <li>{categoria.visibilidad ? "true" : "false"}</li>
                        </ul> */}
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
                        </table>
                    </>
                ));

                // const tables = getItems.map((item: Item, index: number) => (
                //     <>
                //         <ul key={index}>
                //             <li key={item.nombre}>{item.nombre}</li>
                //             <li key={item.link}>{item.link}</li>
                //             <li key={item.link_status}>{item.link_status}</li>
                //         </ul>
                //     </>
                // ));

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
