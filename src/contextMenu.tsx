import React from "react";

function NoneContextMenu(e: React.MouseEvent<HTMLElement>){
  e.preventDefault();
}


export function Default( props: DefaultProps){

  return (
    <>
      <div className='margin_out'
      style={{ top: `${props.menuPos.top - 15}px`, left: `${props.menuPos.left - 15}px` }}
      onMouseLeave={() => props.setMenuVisible(false)}>
      <div className='contentMenu'
      onContextMenu={NoneContextMenu}
      >
        <button onContextMenu={NoneContextMenu}>Create</button>
        <button onContextMenu={NoneContextMenu}>Delete</button>
        <button onContextMenu={NoneContextMenu}>Update</button>
        <button onContextMenu={NoneContextMenu}>Get Info</button>
      </div>
    </div>
    </>   
  )
}