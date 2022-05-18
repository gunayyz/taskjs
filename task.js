const str= "  salam  "
const arr = str.split('').sort()
let symbolsList = {}

for (symbol of arr) {

   if (!symbolsList[symbol]) {
    symbolsList[symbol]=1;
   }
   else {
    symbolsList[symbol]++
  }
}

console.log(symbolsList)
