faturamento = [

{
    "estado": "SP",
    "valor": 67836.43

},
{
    
    "estado":"RJ",
    "valor": 36678.66
},
{
    "estado":"MG",
    "valor": 29229.88
},
{
    "estado":"ES",
    "valor": 27165.48
},
{
    "estado":"Outros",
    "valor": 19849.53
}]

let soma=0, i=0, porcentagem =0;

for(i=0; i<=4;i++){

    soma = soma + faturamento[i].valor

}

for(i=0; i<=4; i++){

    porcentagem = (faturamento[i].valor / soma) * 100


    console.log("A porcentagem do estado "+faturamento[i].estado, "é de:" +porcentagem)

    porcentagem =0;

}
console.log(soma)
