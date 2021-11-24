//dinamic import para llamar codigo y optimizar el proyecto

const button = document.getElementById("btn")

//escuchar los cambios de la accion
button.addEventListener("click",async function(){
    const module = await import("./file.js");
    module.hello
});