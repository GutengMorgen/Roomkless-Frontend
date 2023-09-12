import { useEffect, useState } from 'react';
import * as api from './Api';


export function TableCategorias(props: {datos: Array<Categoria>}) {

    // console.log(props.datos);
    return(
        props.datos.map((categoria: Categoria, index: number) => (
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
        ))
    );
}

export function TableItems(props: {datos: Array<Item>}){
    
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

export function FirstLoad() {
    const [myTable, setMyTable] = useState<JSX.Element | null>(null); 

    useEffect(() => {
        async function func() {
            const getContent = await api.handleConsulta();
            // if(getContent == undefined) return;

            const table = <TableCategorias datos={getContent}/>
            setMyTable(table);
        }
        func();
    }, [])

    return (
        <>{myTable}</>
    )
}
