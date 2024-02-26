function sde() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let delta = ((b**2)-(4*a*c));
    if (delta<0) {
        document.getElementById("result").innerHTML="the equation has no roots";
    }
    else if (delta==0) {
        x = ((-b)+(Math.sqrt(delta)))/(2*a);
        document.getElementById("result").innerHTML=`The value of x is ${x}`;
    }
    else if (delta>0) {
        let xone = ((-b)+(Math.sqrt(delta)))/(2*a);
        let xtwo = ((-b)-(Math.sqrt(delta)))/(2*a);
        document.getElementById("result").innerHTML=`The equation roots are ${xone} and ${xtwo}`;
    }
}

function reset() {
    document.getElementById("a").value="";
    document.getElementById("c").value="";
    document.getElementById("b").value="";
    document.getElementById("result").innerHTML="";
}