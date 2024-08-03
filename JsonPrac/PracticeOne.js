// const json = `{"result":true, "count":42}`
// const obj = JSON.parse(json)
// console.log(obj.count);
// console.log(obj.result);

setTimeout(()=>{
    console.log("First")
},1000)

setTimeout(()=>{
    console.log("Second")
},5000)

setTimeout(()=>{
    console.log("Third")
}, 200)