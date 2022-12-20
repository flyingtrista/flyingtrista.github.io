console.clear();

// 一維陣列

let array1 = [];
let array2 = new Array();
let array3 = new Array(10);

let Computer = ['a','aa','aaa'];
let com = new Array('CPU','CCC','DDD');

let products = [
    ['aaa'],
    ['bbb'],
    ['ccc']
];

console.log(typeof Computer);
console.log(array1 instanceof Array);
console.log( Array.isArray(Computer) );


let Cars = ['BMW','Telsa','Toyota'];
Cars.forEach(function(item,index){
    console.log(`${item}的索引是${index}`)

});

Cars.forEach((item,index)=>{
    console.log(index,item,typeof item,typeof Cars)
})