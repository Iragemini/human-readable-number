module.exports = function toReadable (number) {

    if(number === null || number === "") return "";

    let numberArr = number.toString().split('');
    let numberArrLen = numberArr.length;
    let namesNumbers = [
        ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'], 
        ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    ];
    let result = "";
    let hundred = "hundred";
    
    if (numberArrLen === 1){
        return result = namesNumbers[0][Number.parseInt(numberArr[0])];
      }
    if (numberArrLen === 2){
        if(numberArr[0] === "1"){
            return result = namesNumbers[1][Number.parseInt(numberArr[1])];  
        }else if(numberArr[1] === '0'){
            return result = namesNumbers[2][Number.parseInt(numberArr[0])-2];
        }else{
            return result = `${namesNumbers[2][Number.parseInt(numberArr[0])-2]} ${namesNumbers[0][Number.parseInt(numberArr[1])]}`; 
        }
    }
    if (numberArrLen === 3){
        result = `${namesNumbers[0][Number.parseInt(numberArr[0])]} ${hundred}`;         
        if(number.toString().endsWith('00')){
            return result;
        }else if(numberArr[2] === "0"){
            if(number.toString().endsWith('10')){
                return result += ` ${namesNumbers[1][0]}`;
            }else{
                return result += ` ${namesNumbers[2][Number.parseInt(numberArr[1])-2]}`;
            }
        }
        else{
            if(numberArr[1] === '0'){
                return result += ` ${namesNumbers[0][Number.parseInt(numberArr[2])]}`;
            }else{
                if(numberArr[1] === "1"){
                    return result += ` ${namesNumbers[1][Number.parseInt(numberArr[2])]}`;
                }else{
                    return result += ` ${namesNumbers[2][Number.parseInt(numberArr[1])- 2]} ${namesNumbers[0][Number.parseInt(numberArr[2])]}`;
                }
            }
        }
    }
      console.log(`my result === ${result}`);
      return result.trim();
}

