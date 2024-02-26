function convertheat() {
    let cel = parseFloat(document.getElementById("cel").value);
    let fer = parseFloat(document.getElementById("fer").value);
    let kel = parseFloat(document.getElementById("kel").value);
    if (!isNaN(cel)) {
        fer = (cel*1.8)+32;
        kel = cel+273.15;
    }
    else if (!isNaN(fer)) {
        cel = (fer-32)*(5/9);
        kel = (fer-32)*(5/9)+273;
    }
    else if (!isNaN(kel)) {
        cel = kel-273.15;
        fer = (cel*1.8)+32;
    }
    document.getElementById("cel").value=cel;
    document.getElementById("fer").value=fer;
    document.getElementById("kel").value=kel;

    }

function reset() {
    document.getElementById("cel").value="";
    document.getElementById("fer").value="";
    document.getElementById("kel").value="";
}
    
    

