function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    if(principal == "" || principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    else{
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposit <span id='HL'>"+principal+"</span>,\<br\>at an interest rate of <span id='HL'>"+rate+"%</span>.\<br\>You will receive an amount of <span id='HL'>"+interest+"</span>,\<br\>in the year <span id='HL'>"+year+"</span>\<br\>";
        return true;
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}     