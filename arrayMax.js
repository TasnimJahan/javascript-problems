var marks = [23,65,97,69,36,74,90,71,44];
var max= marks[0];
for(i=0;i<marks.length;i++){
    if(marks[i]>max){
        max=marks[i];
    }
}
console.log(max);