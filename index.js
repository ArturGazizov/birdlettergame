let birds=["Grey tinamou",
"Solitary tinamou",
"Black tinamou",
"Great tinamou",
"White-throated tinamou",
"Jack or Jackson",
"Blue",
"Rocky",
"Jett",
"Rio"]

let current=1
let which=0

function show(){
  if (current<10)
document.getElementById("current").innerHTML = birds[current];
else
document.getElementById("current").innerHTML = "";

}


document.onkeypress = function (e) {

    e = e || window.event;
    let letter=String.fromCharCode(e.keyCode)


word=birds[current]

      if (letter==word[which*(word.length-1)])
      {
        word=word.replace(new RegExp(letter,"g"), "");

while (word[0]==" "||word[0]=="-")
word = word.substring(1);

while (word.substr(-1)==" "||word.substr(-1)=="-")
word = word.slice(0, -1);


birds[current]=word

if (birds[current].length==0)  
{current+=1
which=1}

        show()
        which=!which
      }

};
