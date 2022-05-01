document.write("<h1>Questão 1</h1>");
var soma, media;
var n;
n = new Array(2);

for (var i = 0; i <= 2; i++){
    
    n[i] = parseInt(prompt("Digite o"+" "+i+" "+"valor"));
    if (n[i] < 0 || n[i] > 10 ){
        while (n[i] < 0 || n[i] > 10 ){
        alert("Escreva um número maior que 0  e menor que 10!");
        n[i] = parseInt(prompt("Digite o"+" "+i+" "+"valor"));
    }
  }
}
soma = (n[0]+n[1]+n[2]);
media = (n[0]+n[1]+n[2])/3;

document.writeln("<p>SOMA:"+soma+'</p>');
document.writeln("<p>MÉDIA:"+media+"</p>");

document.write("<p>O aluno se encontra:</p>");
if (media >= 7){
    document.write("<p class = ap>Aprovado</p>");
} else { if (media = 7 && media >=1.8){
    document.write("<p>Em exame</p>");
} else{ 
    document.write("<p class = rp>Reprovado</p>");
}
}

document.write("<h1>Questão 2</h2>");
var  a, v, media1, soma1;
v = new Array(a);
a = parseInt(prompt("Quantos números deseja informar?"));
    if (a < 0 ){
       while (a < 0){
         alert("Escreva um número maior que 0!");
         a = parseInt(prompt("Quantos números deseja informar?"));
       }
    }
media1 = 0;
soma1 = 0;
    for (var i = 0; i <= a-1; i++){
        v[i] = parseInt(prompt("Digite o elemento do vetor"));
        soma1 = (soma1 + v[i]);
        media1 = (soma1/v.length); 
        

        document.write("<p>ELEMENTO DO VETOR:"+v[i]);
        document.write("<p>SOMA:"+soma1);
        document.write("<p>MEDIA:"+media1);
    }

document.write("<h1>Questão 3</h1>");






    