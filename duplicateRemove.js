var id=[1,2,4,8,2,5,7,5,6,4,3,2];
var unique=[];
for (let i = 0; i < id.length; i++) {
    const element = id[i];
    var isContain = unique.indexOf(element);
    if (isContain==(-1)) {
        unique.push(element);
    }
}
console.log(unique);