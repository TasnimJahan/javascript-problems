//------- 1st niom--------
// let a = 5;
// let b = 9;
// console.log("before swap a=", a, "b=", b);
// let temp = a;
// a = b;
// b = temp;
// console.log("after swap a=", a, "b=", b);

// -------2nd niom--------
let p = 5;
let q = 9;
console.log("before swap p=", p, "q=", q);
p = p + q;
q = p - q;
p = p - q;
console.log("after swap p=", p, "q=", q);

//-------- 3rd niom---------
let [x,y] = [5,9];
console.log("before swap x=", x , "y=",y);
[y,x]= [x,y];
console.log("after swap x=", x , "y=",y);