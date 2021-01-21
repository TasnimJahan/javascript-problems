var speech = "I am a good   girl. I never     sleep late";
function reverseString(statement) {
    var reverse = "";
    for (let i = 0; i < speech.length; i++) {
        const element = speech[i];
        reverse= element+reverse;
    }
    return reverse;
}
var result = reverseString(speech);
console.log(result);