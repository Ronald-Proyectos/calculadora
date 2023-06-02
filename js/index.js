const body = document.body,
      pantalla = document.querySelector(".result"),
      botones = document.querySelectorAll(".btn"),
      toggle = document.querySelector(".toggle"),
      numTheme1 = document.getElementById("num-theme-1"),
      numTheme2 = document.getElementById("num-theme-2"),
      numTheme3 = document.getElementById("num-theme-3")


const toggleCS = document.styleSheets[0].cssRules[14].style


botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        const botonPresionado = boton.textContent


        if(boton.id === "reset") return pantalla.textContent = "0"

        if(boton.id === "del"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0"
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1)
            }
            return
        }

        if(boton.id === "equal"){
            try{
                pantalla.textContent = eval(pantalla.textContent)
            } catch {
                pantalla.textContent = "Error!"
            }
            return
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botonPresionado
        }else{
            pantalla.textContent += botonPresionado
        }

    })
})



document.addEventListener("click", (e) => {
    if(e.target === numTheme1){
        toggleCS.setProperty("left", "5px")
        body.classList.remove("theme2")
        body.classList.remove("theme3")
    }

    if(e.target === numTheme2){
        toggleCS.setProperty("left", "24px")
        body.classList.add("theme2")
        body.classList.remove("theme3")
    }

    if(e.target === numTheme3){
        toggleCS.setProperty("left", "44px")
        body.classList.add("theme3")
        body.classList.remove("theme2") 
    }
})

document.addEventListener("DOMContentLoaded", () => {
    body.classList.add("theme1")

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleCS.setProperty("left", "44px")
        body.classList.add("theme3")
    }else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
        toggleCS.setProperty("left", "24px")
        body.classList.add("theme2")
    }
})