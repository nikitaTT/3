let textarea = document.getElementById("sandbox"),
text = textarea.value;

button = document.getElementById("find");
button.addEventListener("click", ShowText);

function ShowText() {
    text = textarea.value;

    text = text.replace(/[,]/g, " ");
    text = text.replace(/[!]/g, " ");
    text = text.replace(/[?]/g, " ");
    text = text.replace(/[.]/g, " ");
    alert(text);
   
    
}