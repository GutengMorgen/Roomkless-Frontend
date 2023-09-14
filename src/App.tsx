/* eslint-disable @typescript-eslint/no-unused-vars */
// import reactLogo from './assets/react.svg'
import './App.css'
import './customTable.css'
import './contextMenu.css'
import * as Tables from './tableGenerator'
import * as api from './Api'
import React, { useState } from 'react';
import * as contextMenu from './contextMenu.tsx';


export default function App() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const [target, setTarget] = useState<HTMLElement>();

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

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    // event.preventDefault();
    const target = event.target as HTMLElement;
    const categoryElement = target.closest('.categoryName') as HTMLDivElement;
    const itemRowElement = target.closest('.itemRow') as HTMLDivElement;
  
    if (categoryElement || itemRowElement) {
      event.preventDefault();
      setMenuPos({ top: event.pageY, left: event.pageX });
      setMenuVisible(true);
      setTarget(categoryElement || itemRowElement);
    }  
  }

  return (
    <>
      {menuVisible && <contextMenu.Default menuPos={menuPos} setMenuVisible={setMenuVisible} target={target}/>}
      <div id='container'
        onContextMenu={handleContextMenu}
      >
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