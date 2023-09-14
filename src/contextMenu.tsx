import React from "react";

function NoneContextMenu(e: React.MouseEvent<HTMLElement>){
  e.preventDefault();
}

function ItemsOptions( props: {setBlankVisible: React.Dispatch<React.SetStateAction<boolean>>}){

  return (
    <>
      <button>Check link status</button>
      <button onContextMenu={NoneContextMenu} onClick={() => props.setBlankVisible(true)}>Create new Item</button>
      <button onContextMenu={NoneContextMenu}>Delete this Item</button>
      <button onContextMenu={NoneContextMenu}>Update this Item</button>
      <button onContextMenu={NoneContextMenu}>Get Info</button>
    </>
  );
}

function CategoriasOptions( props: {setBlankVisible: React.Dispatch<React.SetStateAction<boolean>>}){

  return (
    <>
      <button>Check all link status</button>
      <button onContextMenu={NoneContextMenu} onClick={() => props.setBlankVisible(true)}>Create new Room</button>
      <button onContextMenu={NoneContextMenu}>Delete this Room</button>
      <button onContextMenu={NoneContextMenu}>Update this Room</button>
      <button onContextMenu={NoneContextMenu}>Get Info</button>
    </>
  )
}

export function Default( props: DefaultProps){
  const [options, setOptions] = React.useState<React.JSX.Element | null>(null);
  const [blankVisible, setBlankVisible] = React.useState(false);

  React.useEffect(() => {
    if (props.target?.className === "categoryName") 
      setOptions(<CategoriasOptions setBlankVisible={setBlankVisible}/>);

    else if (props.target?.className === "itemRow")
      setOptions(<ItemsOptions setBlankVisible={setBlankVisible}/>);
    
  }, [props.target]);

  return (
    <>
      <div className='marginOut' onMouseLeave={() => !blankVisible && props.setMenuVisible(false)} onContextMenu={NoneContextMenu} style={{ top: `${props.menuPos.top - 15}px`, left: `${props.menuPos.left - 15}px` }}>
        <div className='contentMenu' onContextMenu={NoneContextMenu}>
          {options}
      </div>
    </div>
    {/* cuando se haga click en el boton cerrar poner props.setMenuVisible en falso */}
    {blankVisible && 
      <div className='blank'>
        <button onClick={() => props.setMenuVisible(false)}>cerrar</button>
      </div>
    }
    </>   
  )
}