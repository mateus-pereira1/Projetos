//Variáveis criadas a partir do HTML 
let display = window.document.getElementById("display");
let saudacao = window.document.getElementById("saudacao");
let data = window.document.getElementById("data");
let toggleButton = window.document.getElementById("toggleButton");
let imagem = window.document.getElementById("imagem");
let escolhaTema = false;
let formatar = false;
let formatarHoras = window.document.getElementById("formatarHoras");

//Variáveis para os dias da semana e os meses
let diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

//Função Main
setInterval(() => {
    //Utilização do Local Date. Mostra a data e hora na tela
    const date = new Date();
    let hora = date.getHours();
    display.innerText = `${mostraHoras()}`;

    //Define a saudação de acordo com o horário
    mostraSaudacao(hora);

    //ostra o dia, mẽs e ano na tela
    mostraData(date);
    
}, 1000);


//Formata as horas
function formataHora(hour12){
    return new Intl.DateTimeFormat('pt-br',{
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: hour12
    });
}

//Função que usa as horas formatadas
function mostraHoras(){
    const data = new Date();
    return formataHora(formatar).format(data);
    
}

function formatacaoHoras(){
    formatar = !formatar;
}

//Função que mostra a data por extenso
function mostraData(date){

    let diaSemana = diasSemana[date.getDay()]
    let diaAtual = date.getDate();
    let mesAtual = mes[date.getMonth()];
    let anoAtual = date.getFullYear();


    return data.innerText = `${diaSemana}, ${diaAtual} de ${mesAtual} de ${anoAtual}`;
}

//Função que realiza a saudação

function mostraSaudacao(hora){
    if(hora >= 6 && hora < 12){
        return saudacao.innerText = `Bom dia!`;
    } else if(hora >= 12 && hora < 18){
        return saudacao.innerText = `Boa tarde!`;
    } else{
        return saudacao.innerText = `Boa noite!`;
    }
}

//FUnção que adiciona botão para troca de tema entre claro e escuro
function tema(){

    if( escolhaTema === false){
        imagem.src = "assets/images/brilho.png";
        document.body.classList.add('dark-theme');
        escolhaTema = true;
    } else{
        document.body.classList.remove('dark-theme');
        imagem.src = "assets/images/forma-de-fase-da-lua-crescente-com-duas-estrelas.png";
        escolhaTema = false;
    }
    
    
}