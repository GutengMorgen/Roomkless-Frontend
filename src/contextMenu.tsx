import React from "react";


export function Default( props: DefaultProps ){
  const [menuElements, setMenuElements] = React.useState<React.JSX.Element | null>(null);
  const [blankElements, setBlankElements] = React.useState<React.JSX.Element | null>(null);
  const [blankVisible, setBlankVisible] = React.useState(false);

  React.useEffect(() => {
    if (props.target?.className === "categoryName")
      setMenuElements(<CategoriasOptions setBlankVisible={setBlankVisible} setBlankElements={setBlankElements}/>);

    else if (props.target?.className === "itemRow")
      setMenuElements(<ItemsOptions setBlankVisible={setBlankVisible} setBlankElements={setBlankElements}/>);
    
  }, [props.target]);

  return (
    // onMouseLeave={() => !blankVisible && props.setMenuVisible(false)}
    <div className={!blankVisible? "marginOut" : "blank"} onContextMenu={NoneContextMenu} style={{ top: `${props.menuPos.top - 15}px`, left: `${props.menuPos.left - 15}px` }}>
      <div className={!blankVisible? "contentMenu" : "contentBlank"} onContextMenu={NoneContextMenu}>
        {!blankVisible? menuElements : blankElements}
        {/* cuando se haga click en el boton cerrar poner props.setMenuVisible en falso */}
        <button onClick={() => props.setMenuVisible(false)}>cerrar</button>
      </div>
    </div>
  )
}

function NoneContextMenu(e: React.MouseEvent<HTMLElement>){
  e.preventDefault();
}

function ItemsOptions( props: CI_Props ){

  function handleCreateBtn(){
    props.setBlankVisible(true);
    props.setBlankElements(<CreateItemTemplate />);
  }

  function handleDeleteBtn(){
    props.setBlankVisible(true);
    props.setBlankElements(<DeleteTemplate />);
  }

  function handleUpdateBtn(){
    props.setBlankVisible(true);
    props.setBlankElements(<UpdateItemTemplate />);
  }

  function handleGetInfoBtn(){
    props.setBlankVisible(true);
    props.setBlankElements(<GetInfoItem />);
  }

  return (
    <>
      <button>Check link status</button>
      <button onContextMenu={NoneContextMenu} onClick={handleCreateBtn}>Create new Item</button>
      <button onContextMenu={NoneContextMenu} onClick={handleDeleteBtn}>Delete this Item</button>
      <button onContextMenu={NoneContextMenu} onClick={handleUpdateBtn}>Update this Item</button>
      <button onContextMenu={NoneContextMenu} onClick={handleGetInfoBtn}>Get Info</button>
    </>
  );
}

function CategoriasOptions( props: CI_Props ){
  
  function handleCreateBtn(){
    props.setBlankVisible(true);
    props.setBlankElements(<CreateRoomTemplate />);
  }

  function handleDeleteBtn(){
    props.setBlankVisible(true);
    props.setBlankElements(<DeleteTemplate />);
  }

  function handleUpdateBtn(){
    props.setBlankVisible(true);
    props.setBlankElements(<UpdateRoomTemplate />);
  }

  function handleGetInfoBtn(){
    props.setBlankVisible(true);
    props.setBlankElements(<GetInfoRoom />);
  }

  return (
    <>
      <button>Check all link status</button>
      <button onContextMenu={NoneContextMenu} onClick={handleCreateBtn}>Create new Room</button>
      <button onContextMenu={NoneContextMenu} onClick={handleDeleteBtn}>Delete this Room</button>
      <button onContextMenu={NoneContextMenu} onClick={handleUpdateBtn}>Update this Room</button>
      <button onContextMenu={NoneContextMenu} onClick={handleGetInfoBtn}>Get Info</button>
    </>
  )
}

// TERMINAR DE CREAR EL CRUD PARA CATEGORIAS E ITEMS
function CreateItemTemplate(){

  return (
    <>
      <div id="createTemplate">
        <div id="i1">
          <p><label htmlFor="itemName">Nombre:</label></p>
          <input type="text" id="itemName" />
        </div>
        <div id="i2">
          <p><label htmlFor="itemLink">Link:</label></p>
          <input type="url" id="itemLink" />
        </div>
        <div id="i3">
          <p><label htmlFor="itemDescription">Descripcion:</label></p>
          <input type="url" id="itemDescription" />
        </div>
        <div id="i4">
          <p><label htmlFor="itemEtiqueta">Etiqueta:</label></p>
          <input type="text" id="itemEtiqueta" />
        </div>
        <div id="i5">
          <p><label htmlFor="itemCategory">Categoria:</label></p>
          <select id="itemCategory">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <button>Save</button>
    </>
  )
}

function CreateRoomTemplate(){

  return (
    <>
      <label htmlFor="itemName">Nombre:</label>
      <input type="text" id="itemName" />
      <label htmlFor="itemLink">Link:</label>
      <input type="url" id="intemLink" />
      <label htmlFor="itemDescription">Descripcion:</label>
      <input type="url" id="intemDescription" />
    </>
  )
}

function DeleteTemplate(){
  
  return (
    <>
      <label htmlFor="itemName">Nombre:</label>
      <input type="text" id="itemName" />
      <label htmlFor="itemLink">Link:</label>
      <input type="url" id="intemLink" />
      <label htmlFor="itemDescription">Descripcion:</label>
      <input type="url" id="intemDescription" />
    </>
  )
}

function UpdateItemTemplate(){

  return (
    <>
      <label htmlFor="itemName">Nombre:</label>
      <input type="text" id="itemName" />
      <label htmlFor="itemLink">Link:</label>
      <input type="url" id="intemLink" />
      <label htmlFor="itemDescription">Descripcion:</label>
      <input type="url" id="intemDescription" />
    </>
  )
}

function UpdateRoomTemplate(){

  return (
    <>
      <label htmlFor="itemName">Nombre:</label>
      <input type="text" id="itemName" />
      <label htmlFor="itemLink">Link:</label>
      <input type="url" id="intemLink" />
      <label htmlFor="itemDescription">Descripcion:</label>
      <input type="url" id="intemDescription" />
    </>
  )
}

function GetInfoItem(){

  return (
    <>
      <label htmlFor="itemName">Nombre:</label>
      <input type="text" id="itemName" />
      <label htmlFor="itemLink">Link:</label>
      <input type="url" id="intemLink" />
      <label htmlFor="itemDescription">Descripcion:</label>
      <input type="url" id="intemDescription" />
    </>
  )
}

function GetInfoRoom(){
  
  return (
    <>
      <label htmlFor="itemName">Nombre:</label>
      <input type="text" id="itemName" />
      <label htmlFor="itemLink">Link:</label>
      <input type="url" id="intemLink" />
      <label htmlFor="itemDescription">Descripcion:</label>
      <input type="url" id="intemDescription" />
    </>
  )
}
