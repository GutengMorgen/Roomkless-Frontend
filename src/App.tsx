/* eslint-disable @typescript-eslint/no-unused-vars */
// import reactLogo from './assets/react.svg'
import './App.css'
import './customTable.css'
import * as Tables from './tableGenerator'
import * as api from './Api'
import React, { useState } from 'react';


export default function App() {
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false);
  const [elements, setElements] = React.useState<JSX.Element[]>([]);

  const handleButtonClick = async () => {
    const getPagination = await api.HandleLoadMoreCategorias(); // Obtiene la paginación de categorías
    
    if (getPagination == undefined) return;
    
    const getContent = getPagination.content; // Obtiene el content de la paginación: Array<Categoria>
    setDisabledBtn(getPagination.lastPage);

    const newElement = <Tables.TableCategorias key={elements.length} datos={getContent} />;
    setElements([...elements, newElement]); // Actualiza el estado con el contenido generado
  };


  return (
    <>
      <div id='container'>
        <Tables.FirstLoad/>
        {elements}
      </div>
      <div id='footer'>
        <button onClick={handleButtonClick} disabled={disabledBtn}>Load More</button>
      </div>
    </>
  );
}




/*
const DynamicElement: React.FC<{ id: number }> = React.memo(({ id }) => {
  return <div>New Element {id}</div>;
});

const App: React.FC = () => {
  // State to store the dynamically created element IDs
  const [elementIds, setElementIds] = useState<number[]>([]);

  // Counter to generate unique element IDs
  const [counter, setCounter] = useState<number>(0);

  // Event handler for the button click
  const handleButtonClick = () => {
    // Generate a unique element ID
    const newElementId = counter + 1;

    // Append the new element ID to the existing IDs
    setElementIds((prevIds) => [...prevIds, newElementId]);

    // Update the counter
    setCounter(newElementId);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Add Element</button>
      <div className="container">
        {elementIds.map((id) => (
          <DynamicElement key={id} id={id} />
        ))}
      </div>
    </div>
  );
};
*/