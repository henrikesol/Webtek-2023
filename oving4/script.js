/* Part 2 */
console.log('PART 2')

for (let i = 1; i < 21; i++) {
    console.log(i);
}

/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < numbers.length; i++) {

    /* Checks if both divisable by 3 and 5 */
    if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0) {
        console.log("eplekake");

    /* Checks if divisible by 3 */
    } else if (numbers[i] % 3 == 0) {
        console.log("eple");

    /* Checks if divisible by 5 */
    } else if (numbers[i] % 5 == 0) {
        console.log("kake");
    }
}

/* Part 4 */

document.getElementById("title").innerText= "Hello, JavaScript"

/* Part 5 */
function changeDisplay () {
    document.getElementById("magic").style.display = "none";
}

function changeVisibility () {
    document.getElementById("magic").style.visibility = "hidden";
    document.getElementById("magic").style.display = "block";
}

function reset () {
    document.getElementById("magic").style.visibility = "visible";
    document.getElementById("magic").style.display = "block";
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

for (let i = 0; i < technologies.length; i++) {
    var li = document.createElement("li");
    var text = document.createTextNode(technologies[i]);
    li.appendChild(text);
    document.getElementById("tech").appendChild(li);
}
