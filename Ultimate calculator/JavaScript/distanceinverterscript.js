function convert() {
    let m = parseFloat(document.getElementById("meter").value);
    let km = parseFloat(document.getElementById("kmeter").value);
    let cm = parseFloat(document.getElementById("cmeter").value);
    let mm = parseFloat(document.getElementById("mmeter").value);
    let yrd = parseFloat(document.getElementById("yard").value);
    let mi = parseFloat(document.getElementById("mile").value);

    if (!isNaN(m)) {
        km = m/1000;
        cm = m*100;
        mm = m*1000;
        yrd = m*1.09361
        mi = m*0.000621371
        document.getElementById("kmeter").value = km;
        document.getElementById("cmeter").value = cm;
        document.getElementById("mmeter").value = mm;
        document.getElementById("yard").value = yrd;
        document.getElementById("mile").value = mi;
    }

    else if (!isNaN(km)) {
        m = km*1000;
        mi = m*0.000621371;
        cm = m*100;
        mm = m*1000;
        yrd = m*1.09361;

        document.getElementById("mile").value = mi;
        document.getElementById("cmeter").value = cm;
        document.getElementById("mmeter").value = mm;
        document.getElementById("yard").value = yrd;
        document.getElementById("meter").value = m;
    }

    else if (!isNaN(cm)) {
        m = cm/100;
        km = m/1000;
        mm = m*1000;
        yrd = m*1.09361
        mi = m*0.000621371
        document.getElementById("kmeter").value = km;
        document.getElementById("meter").value = m;
        document.getElementById("mmeter").value = mm;
        document.getElementById("yard").value = yrd;
        document.getElementById("mile").value = mi;
    }

    else if (!isNaN(mm)) {
        m = mm/1000;
        km = m/1000;
        cm = m*100;
        yrd = m*1.09361
        mi = m*0.000621371
        document.getElementById("kmeter").value = km;
        document.getElementById("cmeter").value = cm;
        document.getElementById("meter").value = m;
        document.getElementById("yard").value = yrd;
        document.getElementById("mile").value = mi;
    }

    else if (!isNaN(yrd)) {
        m = yrd/1.09361;
        km = m/1000;
        cm = m*100;
        mm = m*1000;
        mi = m*0.000621371
        document.getElementById("kmeter").value = km;
        document.getElementById("cmeter").value = cm;
        document.getElementById("mmeter").value = mm;
        document.getElementById("meter").value = m;
        document.getElementById("mile").value = mi;
    }

    else if (!isNaN(mi)) {
        m = mi/0.000621371
        km = m/1000;
        cm = m*100;
        mm = m*1000;
        yrd = m*1.09361
        document.getElementById("kmeter").value = km;
        document.getElementById("cmeter").value = cm;
        document.getElementById("mmeter").value = mm;
        document.getElementById("yard").value = yrd;
        document.getElementById("meter").value = m;
    }

}



function reset() {
    document.getElementById("meter").value = ""
    document.getElementById("kmeter").value = "";
    document.getElementById("cmeter").value = "";
    document.getElementById("mmeter").value = "";
    document.getElementById("yard").value = "";
    document.getElementById("mile").value = "";
}