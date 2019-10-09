let field = document.getElementById("field");

field.addEventListener("change", autosave);

function autosave() {
    //sessionStorage.setItem("save", field.value);
    localStorage.setItem("save", field.value);
 }

 if(sessionStorage.getItem("save")){
   // field.value = sessionStorage.getItem("save");
   field.value = localStorage.getItem("save");
 }
