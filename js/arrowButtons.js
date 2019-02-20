var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");

// leftArrow.onclick = arrowSearch;
// rightArrow.onclick = arrowSearch;

leftArrow.addEventListener("click", function() {
    arrowSearch(leftArrow);
})

rightArrow.addEventListener("click", function() {
    arrowSearch(rightArrow);
})

function arrowSearch(arrowClicked) {
    if(arrowClicked.id == "rightArrow"){
        if(window.pokemon == undefined){
            pkmn_data("1");
        }
        else{
            if(window.pokemon.id == 802){
                pkmn_data("1");
            }
            else{
                pkmn_data(window.pokemon.id+1);
            }
        }
    }
    else{
        if(window.pokemon == undefined){
            pkmn_data("802");
        }
        else{
            if(window.pokemon.id == 1){
                pkmn_data("802");
            }
            else{
                pkmn_data(window.pokemon.id-1);
            }
        }
    }
    
}

document.addEventListener ('keypress', function(event) {
    const keyName = event.key;
    // alert ('keypress event \ n \ n' + 'chave:' + keyName);
  });