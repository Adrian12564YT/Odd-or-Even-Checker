function Clicking()
{
    a = document.getElementById("log").value
    var Number;
    Number = parseInt(a)

    if (Number%2==0) {
        console.log("This Number is Even");
        document.getElementById("Analyzer").innerHTML = "This Number is Even"
    }
    else {
        console.log("This Number is An Odd Number");
        document.getElementById("Analyzer").innerHTML = "This Number is An Odd Number"
    }
}