function compute()
{
    //p = document.getElementById("principal").value;

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var ans = "If you deposit " + String(principal) + ",<br>"
        + "at an interest rate of " + String(rate) + ".\n"
        + "You will receive an amount of " + String(interest) + ",\n"
        + "in the year " + String(year);
    document.getElementById("result").innerHTML=ans;
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
