function resultado(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var res = num1 + num2;
    if (res > 10){
        document.getElementById("resultado").innerHTML = "A soma é maior que 10: "+ res;
    }
    else{
        document.getElementById("resultado").innerHTML = res
    }
}
function copyToClipboard() {
    const codeSnippet = document.getElementById('code-snippet');
    const range = document.createRange();
    range.selectNode(codeSnippet);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Código copiado para a área de transferência!');
}