// td.forEach(e => {
//     console.log(e);
// })

let posX;
let posY;

tables.forEach(table => {
    // console.log(table);
    table.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        const target = e.target;
        posX = e.x;
        posY = e.y;
        // console.log(e);
        if(target.tagName == "TH"){
            handle_th(target);
        }
        else if(target.tagName == "TD"){
            handle_td(target);
        }
        
    })
})


function handle_th(elmnt) {
    console.log(elmnt);
    cm_th.style.left = posX + "px";
    cm_th.style.top = posY + "px";
    cm_th.style.display = "block";
}

function handle_td(elmnt) {
    console.log(elmnt);
    cm_td.style.left = posX + "px";
    cm_td.style.top = posY + "px";
    cm_td.style.display = "grid";
}


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