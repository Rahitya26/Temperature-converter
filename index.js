$("input").on("input",function(){
    let ip = $(this);
    let cls = ip.attr("class");
    let kel = $(".kelvin");
    let far = $(".faren");
    let cel = $(".celsius");
    let ktemp,fartemp,ctemp;
    let temp=ip.val();
    temp=parseFloat(temp);
    if(temp == "" || isNaN(temp)){
        ip.val("");
        kel.val("");
        far.val("");
        cel.val("");
        document.body.style.backgroundPosition = "23%";
        return;

    }


    if(cls == "celsius")
    {
        ktemp = temp + 273.15;
        fartemp = temp * (9/5) +32; 
        kel.val(ktemp);
        far.val(fartemp);
        if (ktemp < 288) {
            document.body.style.backgroundPosition = "0%";
        } else if (ktemp >= 288 && ktemp <= 298) {
            document.body.style.backgroundPosition = "50%"; 
        } else if(ktemp > 298) {
            document.body.style.backgroundPosition = "100%"; 
        }
    }

    else if(cls == "kelvin")
    {
        ctemp = temp - 273.15;
        fartemp = (temp-273.15) * 9/5 + 32;
        cel.val(ctemp);
        far.val(fartemp);
        if (temp < 288) {
            document.body.style.backgroundPosition = "0%";
        } else if (temp >= 288 && temp <= 298) {
            document.body.style.backgroundPosition = "50%"; 
        } else if(temp > 298) {
            document.body.style.backgroundPosition = "100%"; 
        }
    }
    else if(cls == "faren"){
        ctemp = (temp - 32) * (5/9);
        ktemp = (temp - 32) * (5/9) + 273.15;
        cel.val(ctemp);
        kel.val(ktemp);
        if (ktemp < 288) {
            document.body.style.backgroundPosition = "0%";
        } else if (ktemp >= 288 && ktemp <= 298) {
            document.body.style.backgroundPosition = "50%"; 
        } else if(ktemp > 298) {
            document.body.style.backgroundPosition = "100%"; 
        }
    }
});