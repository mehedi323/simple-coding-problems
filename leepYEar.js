function leepYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLeepYear = leepYear(2052);
console.log(isLeepYear);