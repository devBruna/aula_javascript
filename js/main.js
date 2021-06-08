/*var nome = "Bruna Cursino";
var idade = 15;
var idade2 = 14;
var frase = "Japão é o melhor time do mundo";

alert("Bem vindo " + nome);
alert(idade + idade2) //com variáveis entre " " é diferente de alert(idade + idade2); sem var entre " ".°
alert(nome + " tem " + idade + " anos");
*/

//usar esses próximos 5 consoles com as var. de baixo.°
//console.log(nome);
//console.log(idade + idade2); //aparece com f12 no navegador, em console.°

//console.log(nome);
//console.log(idade + idade2);

//console.log(frase.replace("Japão", "Brasil")); //vai trocar Japão por Brasil, pode usar no alert também.°


/*var lista = ["maçã", "pêra", "laranja"]; //a lista aparece como array [3] elemento. Mas,
//Se colocar console.log(lista.toString()); ela deixa de ser array e passa a aparecer como string.
//Então, se colocar: (...toString[0]), vai aparecer "m", se colocar (...lista[0]), aparece maçã.°

lista.push("uva"); // insere item.°
lista.pop("maçã"); // retira.°
console.log(lista.length); //vai aparecer a qtd de itens que tem na lista.°
//se tiver um push o n. de itens aparece com o push.°

console.log(lista[1]); //pode ser alert também.°
console.log(lista.reverse()); //aparece a lista com os itens ao contrário.°

console.log(lista.join(" - ")); //ele printa a string com o item que está no parênteses.°
*/


/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);*/


/*var idade = 18;

var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}*/


/*var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1; // count++ é a msm coisa de count + 1
}*/


/*var count;
for(count=0; count <=5; count++)
    alert(count);*/

/*var d = new Date();
alert(d); // vai mostra a data de hoje

var d = new Date();
alert(d.getMonth()+1); // mês põe +1 se não ele começa do 0

var d = new Date();
alert(d.getMinutes());*/


//funções:
/*function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"))*/


/*var validar = 0 //vai utilizar o var global, mas pode colocar o  var dentro da função também, e será considera o validar dentro da função.°
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log(validar);*/

//com o buttom no html:
/*function clicou(){
    alert("Obrigada por clicar!");
}*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://gmail.com/");
    //window.location.href = "https://gmail.com/";
}

//usar sem o "this" em trocar e voltar no p do html.°
/*function trocar(){
    //document.getElementById("mousemove").innerHTML = "OBRIGADA POR PASSAR O MOUSE";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "OBRIGADA POR PASSAR O MOUSE";
}
*/

function trocar(elemento){
    elemento.innerHTML = "OBRIGADA POR PASSAR O MOUSE";

}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}