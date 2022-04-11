// html a incorporar para el renderizado:
    // <button id="tema" onclick="cambiarTexto()">modo noche</button>



    // <!-- modo dia/noche -->

    const temaOscuro= document.querySelector("#tema")
    const body= document.querySelector("body")
    load();
    temaOscuro.addEventListener("click", e=>{
        body.classList.toggle("modoNoche")
        store(body.classList.contains("modoNoche"));
    })
    // cambiar texto del boton
    function cambiarTexto(){
        if(temaOscuro.innerHTML=="modo noche"){
            temaOscuro.innerHTML="modo dia"
        }else{
            temaOscuro.innerHTML="modo noche"
        }
    }

    function load(){
        const modoNoche= localStorage.getItem("modoNoche")
        if(!modoNoche){
            store("false")
        }else if(modoNoche=="true"){
            body.classList.add("modoNoche")
        }
    }
    function store(value){
        localStorage.setItem("modoNoche",value)
    }
    