formField = document.getElementById("form__field");

var key = document.getElementsByClassName("key");

for(var i=0;i<key.length;i++){
    key[i].onclick = updateField;
}

// console.log(key);

function updateField(){
    formField.value = formField.value + this.innerHTML;
    // console.log("clicked");
}