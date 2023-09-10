/* eslint-disable @typescript-eslint/no-unused-vars */
// import reactLogo from './assets/react.svg'
import './App.css'
import * as Table from './tableGenerator'
import * as api from './Api'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const sizeItems = 1;
// let page = 0;
const limitPage = 2;
const size = 1;

/*function App() {
  const [lastPage, setLastPage] = useState<boolean | undefined>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [loadedContent, setLoadedContent] = React.useState<JSX.Element | null>(null);

  const handleLoad = async () => {
    try {
      const getPagination = await api.loadCategorias(currentPage); // Obtiene la paginación de categorías
      const getLastPage = getPagination.last;
      getLastPage == true ? setLastPage(getLastPage) : setCurrentPage(prevPage => prevPage + 1);

      const getContent = getPagination.content; // Obtiene el content de la paginación: Array<Categoria>
      const content = <Table.TableCategorias datos={getContent} />;
      setLoadedContent(content); // Actualiza el estado con el contenido generado
    } catch (error) {
      console.log("Error al llamar a api.loadCategorias()", error);
    }
  };

  const handleButtonClick = () => {
    handleLoad();
  };

  return (
    <>
      <div id='container' ref={containerRef}>
        <Table.TableGenerator/>
        {loadedContent}
      </div>
      <div id='footer'>
        <button onClick={handleButtonClick} disabled={lastPage}>Load More</button>
      </div>
    </>
  );
}

export default App;*/

import { createRoot } from 'react-dom/client';

const App: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const agregarDiv = () => {
    // const nuevoDiv = React.createElement('div', { className: 'mi-div' }, 'Nuevo Div');
    const nuevoDiv = <div>nuevo elemento</div>;
    
    // if (containerRef.current) {
    //   ReactDOM.render(nuevoDiv, containerRef.current);
    // }
    const parent = containerRef.current;
    const root = createRoot(parent!);
    root.render(nuevoDiv);
    
  };

  return (
    <div>
      <h1>Botón para Agregar Divs</h1>
      <button onClick={agregarDiv}>Agregar Div</button>
      <div className="container" ref={containerRef}></div>
    </div>
  );
};

export default App;