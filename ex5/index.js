let string ="targetSistemas", i, novaString="";

function inverterString(str) {
    var novaString = "";

    for (var i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

stringInvertida = inverterString("TargetSistemas");
console.log(stringInvertida);