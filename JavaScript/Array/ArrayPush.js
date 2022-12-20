console.clear();
let Frieds = [];
console.log(Frieds);
let person1 = {
    id:1,
    name:'Dora',
    email:'ttt@ttt.com'
}

let person2 = {
    id:2,
    name:'Dora',
    email:'ttt@ttt.com'
}

console.log(Frieds);
Frieds.push(person1.email);
Frieds.push(person2.email);
console.log(Frieds);
console.log("forEach")
Frieds.forEach(function(item,index){
    console.log(item.id,item.name,index);
});