// td.forEach(e => {
//     console.log(e);
// })

tables.forEach(table => {
    console.log(table);
    table.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        const target = e.target;
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
}

function handle_td(elmnt) {
    console.log(elmnt);
}