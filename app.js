function getnumber(num)
{
    var res=document.getElementById("result");
    res.value +=num; 
}

function clearres()
{
    var res=document.getElementById("result");
    res.value = " "; 
}

function getresult()
{
    var res=document.getElementById("result");
    res.value=eval(res.value);
}