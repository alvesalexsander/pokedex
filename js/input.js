var formField = document.getElementById("form__field");

var autoComplete = ["a","b","c","d","e"];

var key = document.getElementsByClassName("key");

for(var i=0;i<key.length;i++){
    key[i].onclick = updateField;
}

function updateField(){
    formField.value = formField.value + this.innerHTML;
}