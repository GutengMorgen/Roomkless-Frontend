import { useEffect, useState } from 'react';
import * as api from './Api';

/*
export function TableCategorias(props: {datos: Array<Categoria>}) {
    const [disabledBtn, setDisabledBtn] = useState<boolean>(false);
    const [elements, setElements] = useState<React.JSX.Element[]>([]);

    const handleLoadItems = async (CategoriaID: number) => {
        const getPagination = await api.HandleLoadMoreItems(CategoriaID);
        if (getPagination == undefined) return;
    
        const getContent = getPagination.content; // Obtiene el content de la paginación: Array<Categoria>
        setDisabledBtn(getPagination.lastPage);

        const newElement = <TableItems key={elements.length} datos={getContent}/>
        setElements([...elements, newElement]); // Actualiza el estado con el contenido generado
    }

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
                <tbody>
                    <TableItems datos={categoria.items}/>
                    {elements}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={3}>
                            <button onClick={() => handleLoadItems(parseInt(categoria.id))} disabled={disabledBtn}>Load More</button>
                        </th>
                    </tr>
                </tfoot>
            </table>
        ))
    );
}

export function TableItems(props: {datos: Array<Item>}){
    
    // console.log(props.datos);
    return(
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
    );
}
*/


export function TableCategorias(props: {datos: Array<Categoria>}) {
    const [disabledBtn, setDisabledBtn] = useState<boolean>(false);
    const [elements, setElements] = useState<React.JSX.Element[]>([]);

    const handleLoadItems = async (CategoriaID: number) => {
        const getPagination = await api.HandleLoadMoreItems(CategoriaID);
        if (getPagination == undefined) return;
    
        const getContent = getPagination.content; // Obtiene el content de la paginación: Array<Categoria>
        setDisabledBtn(getPagination.lastPage);

        const newElement = <TableItems key={elements.length} datos={getContent}/>
        setElements([...elements, newElement]); // Actualiza el estado con el contenido generado
    }

    // console.log(props.datos);
    return(
        props.datos.map((categoria: Categoria, index: number) => (
            <div className="category" key={`${categoria.id}_${index}`}>
                <div className="categoryName"
                    data-id={categoria.id}
                    data-fecha-creacion={categoria.fecha_de_creacion}
                    data-visibilidad={categoria.visibilidad}
                    data-numero-items={categoria.numero_de_items}>
                        {categoria.nombre}
                </div>
                <div className="itemsWrappers">
                    <div className="itemsContainer">
                        <TableItems datos={categoria.items}/>
                        {elements}
                        <button className="itemBtnLoad" 
                            disabled={disabledBtn} 
                            onClick={() => handleLoadItems(parseInt(categoria.id))}>
                                Load More
                        </button>
                    </div>
                </div>
            </div>
        ))
    );
}

export function TableItems(props: {datos: Array<Item>}){
    
    // console.log(props.datos);
    return(
        props.datos.map((item: Item, index: number) => (
            <div className="itemRow"
                key={`${item.id}_${index}`}
                data-fecha_de_creacion={item.fecha_de_creacion}
                data-descripcion={item.descripcion}
                data-visibilidad={item.visibilidad}
                data-etiqueta={item.etiqueta}
                data-visitas={item.visitas}
                data-ultima_visita={item.ultima_visita}>
                <span>{item.nombre}</span>
                <span>{item.link}</span>
            </div>
        ))
    );
}

export function FirstLoad() {
    const [myTable, setMyTable] = useState<JSX.Element | null>(null); 

    useEffect(() => {
        async function func() {
            const getContent = await api.handleConsulta();

            const table = <TableCategorias datos={getContent}/>
            setMyTable(table);
        }
        func();
    }, [])

    return (
        <>{myTable}</>
    )
}
