// input
const dayIn = document.getElementById("day");
const monthIn = document.getElementById("month");
const yearIn = document.getElementById("year");

// output
const dayOut = document.getElementById("DD");
const monthOut = document.getElementById("MM");
const yearOut = document.getElementById("YYYY");

//form
const form = document.querySelector("form")

// Adding
form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            validator = false;
        } else if (monthIn.value > 12) {
            monthIn.style.borderColor = "red";
            validator = false;
        } else if (monthIn.value > 31) {
            dayIn.style.borderColor = "red";
            validator = false;
        } else {
            i.style.borderColor = "black";
            validator = true;
        }
    })
    return validator;
}
 
function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        if (dayIn.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (monthIn.value > month) {
            month = month + 12;
            year = year - 1;
        }

        const d = day - dayIn.value;
        const m = month - monthIn.value;
        const y = year - yearIn.value;

        dayOut.innerHTML = d;
        monthOut.innerHTML = m;
        yearOut.innerHTML = y;
    }
}