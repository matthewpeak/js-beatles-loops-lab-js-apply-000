// add solution here
function theBeatlesPlay(dude,instrument){
 let x =[];
 for(let i=0;i<dude.length;i++){
   x.push(dude[i]+" plays "+instrument[i]);
 }
 return x ;
}

function johnLennonFacts(facts){
let x =[];
 for(let i=0;i<facts.length;i++){
   x.push(facts[i]+"!!!");
 }
 return x ;
}

function iLoveTheBeatles(n){
let x =[];
let i = 0
 do{
   x.push("I love the Beatles!");
   i++;
 }while(i< 15 && i<n)
 return x ;
}