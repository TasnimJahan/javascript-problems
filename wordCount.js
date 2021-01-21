var speech = "I am a good   girl. I never     sleep late";
var count = 0;
for (let i = 0; i < speech.length; i++) {
    const element = speech[i];
    if (element ==" " && speech[i-1]!=" ") {
        count++;
    }
}
count++;
console.log(count);