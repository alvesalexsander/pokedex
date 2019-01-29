function pkmn_data(){
    var pkmn_name = $("input[name=nome]").val().toLowerCase();
    $.ajax({
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/" + pkmn_name + "/",
        data: {},
        success: function(){
            cycleLed();
        },
        error: function(){
            displayRefresh();
            $("#types").children().css("visibility", "hidden");
            document.getElementById("form__field").value = "";
        },
        complete: function(){
            cycleLed();
        }
    })
    
    .done(function(msg){
        window.pokemon = msg;
        var pkmnName = window.pokemon.forms["0"].name.split("-"||" ", 1);
        var pkmnImage = window.pokemon.sprites.front_default;
        var pkmnType = window.pokemon.types;
        displayRefresh(pkmnName, pkmnImage);
        displayType(pkmnType);
        document.getElementById("form__field").value = "";
    })
    
    return false;
}

var displayRefresh = function(name, image){
    var message = "";
    if(name == undefined || image == undefined){
        name = "";
        image = "";
        message = "Pokémon não encontrado<br>Tente novamente!";
    }
    displayAnimation(name);
    var change = setTimeout(function(){
        $("#pokemon-image").html(message).css("background-image", "url(" + image + ")");
        $("#pokemon-name").html(name);
    }, 500);
}

var displayAnimation = function(name){
        $("#pokemon-image").css({"animation-name": "pkmnChange",
                                "animation-duration": "1s",
                                "animation-timing-function": "ease-out",
                                "animation-fill-mode": "forwards"});
        var reset = setTimeout(function(){
            $("#pokemon-image").css({"animation-name": "",
                                "animation-duration": "",
                                "animation-timing-function": "",
                                "animation-fill-mode": ""});
        }, 1000);
};

var pastTypes = [];

var displayType = function(type){
    if(type.length < 2){
        $("#type1").css("visibility", "hidden");
    }
    type.forEach(function(element, index, array){
        var typeName = type[index].type.name;
        var selectType = "#type"+index;
        pastTypes.push(typeName);
        
            for(i=0;i <= pastTypes.length;i++){
                if($(selectType).hasClass(pastTypes[i])){
                var lastClass = $(selectType).attr('class').split(' ').pop();
                $(selectType).removeClass(lastClass);}
            }
        $(selectType).html(typeName).css("visibility", "visible").addClass(typeName);
    })
}