//Variáveis criadas a partir do HTML 
let display = window.document.getElementById("display");






//Função Main
setInterval(() => {
    //Utilização do Local Date
    const date = new Date();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let segundos = String(date.getSeconds()).padStart(2,'0');
    display.innerText = `${hora}:${minutos}:${segundos}`
}, 100);