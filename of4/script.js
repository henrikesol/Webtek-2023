console.log("Hello World!")

const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph")

function changeHeader(){
    title.style.color = "red";
}

function changeParagraph(){
    paragraph.style.color = "blue";
    paragraph.innerHTML += " Hei";
}

function reset(){
    title.style.color = "black";
    paragraph.style.color = "black";
    paragraph.innerText = "I dag er det intro i JavaScript";

}

const primtall = [2,3,5,7,11,13,17,19,23,29]

/* for (tall of primtall){
    if (tall%2 === 0){
        console.log("Tallet " + tall + " er ikke et primtall");
    }
    else if (tall === 13){
        console.log("Pass på, tallet er " + tall)
    }
    else {
        console.log(tall);
    }
} */

const liste = document.getElementById("liste")

for (let i = 0; i < primtall.length; i++){
    const tall = primtall[i];

    let res = "";

    if (tall%2 === 0){
        res = "Tallet " + tall + " er ikke et primtall";
    }
    else if (tall === 13){
        res = "Pass på, tallet er " + tall
    }
    else {
        res = ""+ tall;
    }

    liste.innerHTML += "<li>" + tall + "</li>";

}

