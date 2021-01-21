var friends = ["Alu", "Bulu", "Culu", "Dulu","Fulu"];
var allNames= "";
for (let i = 0; i < friends.length; i++) {
    const name = friends[i];
    allNames= allNames+name;
}
console.log(allNames);

// function add(a,b){
//     return a+b;
// }
// console.log(add("adam"+"eve"));