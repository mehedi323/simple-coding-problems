function mehediHeight(inch){
    const fit = inch / 12;
    const inchhes = parseInt(fit); 
    const fection = inch % 12;
    const result = inchhes + ' fit ' + fection + ' inch ';
    return result
}
// const result = mehediHeight(58);
// console.log(result);


function inchFeet(inch){
    const feetFaction = inch / 12;
    const feetNumber = parseInt(feetFaction);
    const inchRemaing = inch % 12;
    const result = feetNumber + " inch " + inchRemaing + " feet ";
    return result;
}

// const iftiyasHeight = inchFeet(48);
// console.log(iftiyasHeight); 

function kiloMeter(kilo){
    const kiloMe = kilo / 0.62137119 ;
    const parseInte = parseInt(kiloMe)
    const parseFolte = kilo % 0.62137119;
    const result2 = parseInte + parseFolte;
    return result2;
};
const result = kiloMeter(12);
console.log(result);