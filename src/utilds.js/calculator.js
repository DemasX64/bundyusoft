function iter(firstNumber,secondNumber,operator){
   switch(operator){
    case '/':
      return firstNumber / secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "%":
      return (firstNumber / secondNumber) * 100;
    case "√":
      return firstNumber * Math.sqrt(secondNumber);
    default: return '';
  }
}
function findEndBracket(query,startBracket){
  let brackets = 0;
  for(let i = startBracket+1;i<query.length;i++){
    if(query[i]==='(')
      brackets++
    if(query[i]===')')
      if(brackets===0)
        return i;
      else
        brackets--
  }
}
function findBrackets(query) {
  let result = query;
  let index = 0;
  let startBrackets = []
  let endBrackets = []
  while(index<=query.length-1) {
    let startBracket = query.indexOf('(',index);
    if(startBracket!==-1){
      startBrackets.push(startBracket)
      let endBracket = findEndBracket(query,startBracket);
      endBrackets.push(endBracket)
      index = endBracket
    }
  index++
  }
  for(let i =0;i < startBrackets.length; i++){
    let newQuery = query.slice(startBrackets[i],endBrackets[i]+1);
    let strResult = calculate(newQuery.slice(1,-1));
    result = result.replace(newQuery,strResult)
  }
  return result
}
export function calculate(query) {
  query = query.replace('×','*');

  const reg = /[-+*/%√]/;
  for(let i = 1;i<query.length;i++) {
    if(query[i]==='√' && reg.test(query[i-1])){
      query = query.slice(0,i)+'1'+query.slice(i,query.length);
    }
  }
  if(query[0]==='√'){
    query='1'+query;
  }
  if(query[0]==='-'){
    query='0'+query;
  }
 // let startBracket = query.indexOf('(');
 // let endBracket = findEndBracket(query,startBracket);
 // if(startBracket!==-1&&endBracket!==-1){
 //  let newQuery = query.slice(startBracket,endBracket+1);
 //  let strResult = calculate(newQuery.slice(1,-1));
 //  query = query.replace(newQuery,strResult)
 // }
 query = findBrackets(query)
//  const operatorRegex = /[-+*/%]/;
//  const countersRegex = /\d/;
//  let lastType = 'count'
//  let counters = []
//  let operators = []
//  for(let i = 0; i<query.length;i++){
//    if(operatorRegex.test(query[i])){
//       if(lastType!=='operator') {
//          operators.push(query[i])
//       }
//      lastType = 'operator'
    
//    }
//    if(countersRegex.test(query[i])){
//      counters.push(query[i])
//      lastType = 'count'
//    }
//  }
 
 let counters = query.split(/[-+*/%√]/).filter((el)=> el!=='')
 let operators = query.split(/\d/).filter((el)=> el!=='')

 operators.forEach((el,index) => {
  if(el.length>1){
    counters[index+1] = el[1] + counters[index+1];
    operators[index] = el.slice(0,1)
  }
 })
 // operators.forEach((val,index)=>{
 //   if(val==='-'){
 //     counters[index+1]= '-'+ counters[index+1]
 //     operators[index] = '+';
 //   }
 // })
 while(operators.length>0) {
   let nextOperatorIndex = 0;
   for(let i=0;i<operators.length;i++){
     if(operators[i]==='*'||operators[i]==='/'||operators[i]==='%'||operators[i]==='√'){
       nextOperatorIndex = i;
     }
   }
   const count = iter(Number(counters[nextOperatorIndex]),Number(counters[nextOperatorIndex+1]),operators[nextOperatorIndex])
   operators.splice(nextOperatorIndex,1)
   counters.splice(nextOperatorIndex,1)
   counters[nextOperatorIndex] = count;
 }
 return counters[0]
}

export function haveErrors(query){
  let openBrackets = 0;
  let closeBrackets = 0;
  for(let i = 0; i<query.length;i++) {
    if(query[i]==='('){
      openBrackets++;
    }
    if(query[i]===')'){
      closeBrackets++;
    }
  }
   const operatorsAtStart = /[+*/%]/
   const operatorsAtEnd = /[-+*/%√]/
   if(operatorsAtStart.test(query[0])||operatorsAtEnd.test(query[query.length-1])) {
    return  true;
   }
  if(openBrackets !== closeBrackets) {
    return true
  }
  return false;
}
