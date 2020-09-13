function Ac()
{
    document.getElementById("tela").value = "0";
}

function PosNeg()
{

}

function Porcentagem()
{

}
function divide()
{
    var textoTela = document.getElementById("tela").value;
    document.getElementById("hdMemo").value = textoTela;
    document.getElementById("hdMemoOp").value = "/";
}

function multiplicar()
{
    var textoTela = document.getElementById("tela").value;
    document.getElementById("hdMemo").value = textoTela;
    document.getElementById("hdMemoOp").value = "*";
}

function subtrai()
{
    var textoTela = document.getElementById("tela").value;
    document.getElementById("hdMemo").value = textoTela;
    document.getElementById("hdMemoOp").value = "-";
}

function soma()
{
    var textoTela = document.getElementById("tela").value;
    document.getElementById("hdMemo").value = textoTela;
    document.getElementById("hdMemoOp").value = "+";
}

function igual()
{
    var textoTela = document.getElementById("tela").value;
    var guardado = document.getElementById("hdMemo").value;
    var Op = document.getElementById("hdMemoOp").value;
    if(Op == "+")
    {
        var total = parseFloat(guardado) + parseFloat(textoTela);
        document.getElementById("tela").value = String(total);
    }
    else if(Op == "-")
    {
        var total = parseFloat(guardado) - parseFloat(textoTela);
        document.getElementById("tela").value = String(total);
    }
    else if(Op == "*")
    {
        var total = parseFloat(guardado) * parseFloat(textoTela);
        document.getElementById("tela").value = String(total);
    }
    if(Op == "/")
    {
        var total = parseFloat(guardado) / parseFloat(textoTela);
        document.getElementById("tela").value = String(total);
    }
}

function ponto() 
{
    var textoTela = document.getElementById("tela").value;
    if (textoTela == "0")
    {
        document.getElementById("tela").value = "0.";
    }
    else{
        document.getElementById("tela").value = textoTela + ".";
    }
}

function zero()
{
    var textoTela = document.getElementById("tela").value;
    if (textoTela == "0")
    {
        document.getElementById("tela").value = "0";
    }
    else{
        document.getElementById("tela").value = textoTela + "0";
    }
}
function um() 
{
    // Pegando valor da tela
    var textoTela = document.getElementById("tela").value;
    var Op = document.getElementById("hdMemoOp").value;

    if (Op == "0")
    {
        if (textoTela == "0")
        {
            //quando zero (ou seja ainda não digitei nada), apagar o zero e adicionar o número
            document.getElementById("tela").value = "1";
        }
        else
        {
            //quando outro valor (ou seja já digitei algo), vai ser acrescentado o número a direita
            document.getElementById("tela").value = textoTela + "1";
        }
    }
    else
    {
        document.getElementById("tela").value = "1";
    }
}

function dois() 
{
    var textoTela = document.getElementById("tela").value;
    var Op = document.getElementById("hdMemoOp").value;

    if (Op == "0")
    {
        if (textoTela == "0")
        {
            document.getElementById("tela").value = "2";
        }
        else
        {
            document.getElementById("tela").value = textoTela + "2";
        }
    }
    else
    {
        document.getElementById("tela").value = "2";
    }
}
function tres()
{
    var textoTela = document.getElementById("tela").value;
    var Op = document.getElementById("hdMemoOp").value;

    if (Op == "0")
    {
        if (textoTela == "0")
        {
            document.getElementById("tela").value = "3";
        }
        else
        {
            document.getElementById("tela").value = textoTela + "3";
        }
    }
    else
    {
        document.getElementById("tela").value = "3";
    }
}
function quatro() 
{
    var textoTela = document.getElementById("tela").value;
    var Op = document.getElementById("hdMemoOp").value;

    if (Op == "0")
    {
        if (textoTela == "0")
        {
            document.getElementById("tela").value = "4";
        }
        else
        {
            document.getElementById("tela").value = textoTela + "4";
        }
    }
    else
    {
        document.getElementById("tela").value = "4";
    }
}
function cinco()
{
    var textoTela = document.getElementById("tela").value;
    var Op = document.getElementById("hdMemoOp").value;

    if (Op == "0")
    {
        if (textoTela == "0")
        {
            document.getElementById("tela").value = "5";
        }
        else
        {
            document.getElementById("tela").value = textoTela + "5";
        }
    }
    else
    {
        document.getElementById("tela").value = "5";
    }
}
function seis()
{
    var Op = document.getElementById("hdMemoOp").value;

    if (Op == "0")
    {
        if (textoTela == "0")
        {
            document.getElementById("tela").value = "6";
        }
        else
        {
            document.getElementById("tela").value = textoTela + "6";
        }
    }
    else
    {
        document.getElementById("tela").value = "6";
    }
}
function sete()
{
    var textoTela = document.getElementById("tela").value;
    var Op = document.getElementById("hdMemoOp").value;

    if (Op == "0")
    {
        if (textoTela == "0")
        {
            document.getElementById("tela").value = "7";
        }
        else
        {
            document.getElementById("tela").value = textoTela + "7";
        }
    }
    else
    {
        document.getElementById("tela").value = "7";
    }
}
function oito()
{
    var textoTela = document.getElementById("tela").value;
    var Op = document.getElementById("hdMemoOp").value;

    if (Op == "0")
    {
        if (textoTela == "0")
        {
            document.getElementById("tela").value = "8";
        }
        else
        {
            document.getElementById("tela").value = textoTela + "8";
        }
    }
    else
    {
        document.getElementById("tela").value = "8";
    }
}
function nove()
{
    var textoTela = document.getElementById("tela").value;
    var Op = document.getElementById("hdMemoOp").value;

    if (Op == "0")
    {
        if (textoTela == "0")
        {
            document.getElementById("tela").value = "9";
        }
        else
        {
            document.getElementById("tela").value = textoTela + "9";
        }
    }
    else
    {
        document.getElementById("tela").value = "9";
    }
}