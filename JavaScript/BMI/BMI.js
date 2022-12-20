

console.clear();


const person = {
    name:'Dora',
    age : 11,
    height :180,
    weight : 70,
    bmi : function(){
      
        return this.weight/((this.height/100)**2);
        
    }

};
console.log("obj : "+person);
console.log(person.bmi);
console.log("&o",person);