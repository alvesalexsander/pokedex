function pkmn_data(){
    var pkmn_name = $("input[name=nome]").val().toLowerCase();
    $.ajax({
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/" + pkmn_name + "/",
        data: {},
        error: function(){
            displayRefresh();
            $("#types").children().css("visibility", "hidden");
        }
    })
    
    .done(function(msg){
        window.pokemon = msg;
        var pkmnName = window.pokemon.forms["0"].name;
        var pkmnImage = window.pokemon.sprites.front_default;
        var pkmnType = window.pokemon.types;
//        $("#type0").removeClass(pkmnType["0"].type.name);
//        if(pkmnType.length > 1){
//            $("#type1").removeClass(pkmnType["1"].type.name);
//        }
        displayRefresh(pkmnName, pkmnImage);
        displayType(pkmnType);
    })

    return false;
}

var displayRefresh = function(name, image){
    var message = "";
    if(name == undefined || image == undefined){
        name = "";
        image = "";
        message = "Pokémon não encontrado<br>Tente novamente!";
    }displayAnimation(name);
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
        console.log(pastTypes);
        
            for(i=0;i <= pastTypes.length;i++){
                if($(selectType).hasClass(pastTypes[i])){
                var lastClass = $(selectType).attr('class').split(' ').pop();
                $(selectType).removeClass(lastClass);}
            }
        $(selectType).html(typeName).css("visibility", "visible").addClass(typeName);
//        var lastClass = $(selectType).attr('class').split(' ').pop();
//        $(selectType).removeClass(lastClass);
//        switch(typeName){
//            case 'normal':
//                $(selectType).addClass("normal");
//                break;
//            case 'fire':
//                $(selectType).addClass("fire");
//                break;
//            case 'fighting':
//                $(selectType).addClass("fighting");
//                break;
//            case 'water':
//                $(selectType).addClass("water");
//                break;
//            case 'flying':
//                $(selectType).addClass("flying");
//                break;
//            case 'grass':
//                $(selectType).addClass("grass");
//                break;
//            case 'poison':
//                $(selectType).addClass("poison");
//                break;
//            case 'electric':
//                $(selectType).addClass("electric");
//                break;
//            case 'ground':
//                $(selectType).addClass("ground");
//                break;
//            case 'psychic':
//                $(selectType).addClass("psychic");
//                break;
//            case 'rock':
//                $(selectType).addClass("rock");
//                break;
//            case 'ice':
//                $(selectType).addClass("ice");
//                break;
//            case 'bug':
//                $(selectType).addClass("bug");
//                break;
//            case 'dragon':
//                $(selectType).addClass("dragon");
//                break;
//            case 'ghost':
//                $(selectType).addClass("ghost");
//                break;
//            case 'dark':
//                $(selectType).addClass("dark");
//                break;
//            case 'steel':
//                $(selectType).addClass("steel");
//                break;
//            case 'fairy':
//                $(selectType).addClass("fairy");
//                break;
//        }
    })
}