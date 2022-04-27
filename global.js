// console.log(global)

global.setTimeout(() => {console.log("inside timeout")},3000)

//Same output
setTimeout(() => {console.log("inside timeout")},3000) //-> //its available by default/inheritanly