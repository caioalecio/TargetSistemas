let a=0, b=1, aux, i , n=7;


for(i=2; i<=n; i++){

    aux = a+b;
    a=b;
    b=aux;

    console.log(+aux)

}
