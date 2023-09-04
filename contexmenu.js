let posX, posY;
let select_elmnt = null;

tables.forEach(table => {
    table.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        const target = e.target;
        posX = e.x;
        posY = e.y;
        if(target.tagName == "TH"){
            handle_th(target);
        }
        else if(target.tagName == "TD"){
            handle_td(target);
        }
        
    })
})


function handle_th(elmnt) {
    cm_th.style.left = posX + "px";
    cm_th.style.top = posY + "px";
    cm_th.style.display = "block";
    select_elmnt = elmnt;
}

function handle_td(elmnt) {
    cm_td.style.left = posX + "px";
    cm_td.style.top = posY + "px";
    cm_td.style.display = "grid";
    select_elmnt = elmnt;
}

/**
 * para que desaparezcan los div context menu
 */

cm_th.querySelector('div').addEventListener('mouseleave', function(e) {
    if(e.relatedTarget.tagName !== "BUTTON"){
        cm_th.style.display = "none";
    }
});

cm_td.querySelector('div').addEventListener('mouseleave', function(e) {
    if(e.relatedTarget.tagName !== "BUTTON"){
        cm_td.style.display = "none";
    }
});


/**
 * funcionalidad para el edit_row
 */

edit_row.addEventListener('click', function(e) {
    cm_td.style.display = "none";
    margin_edit_out.style.display = "block";
    edit_layout.style.display = "grid";
    document.body.style.overflow = "hidden";

    if(select_elmnt != null){
        const parent_th = select_elmnt.parentElement;
        name_text.setAttribute("placeholder", parent_th.children[0].textContent);
        link_text.setAttribute("placeholder", parent_th.children[1].textContent);

        // note_text.setAttribute("placeholder", parent_th.children[].textContent);
    }
});

cancel_edit_btn.addEventListener('click', () => {
    margin_edit_out.style.display = "none";
    edit_layout.style.display = "none";
    document.body.style.overflow = "auto";
});

submit_edit_btn.addEventListener('click', () => {
    margin_edit_out.style.display = "none";
    edit_layout.style.display = "none";
    document.body.style.overflow = "auto";

});