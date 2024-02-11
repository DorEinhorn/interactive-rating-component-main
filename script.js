const buttons = document.querySelectorAll('.buttons button');
const submit = document.querySelector('.submit-btn');
const error = document.querySelector('.error-msg');
const selectiobMsg = document.querySelector('.selection-msg');
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
let selected = " ";


function removeSelectedClasses(){
    buttons.forEach( btn => btn.classList.remove("selected"))
};

function addButtonErrors(){
error.classList.remove("d-none")
buttons.forEach(btn =>{
    btn.classList.add("error")
})
}

function removeButtonErrors()
{
    error.classList.add("d-none")
    buttons.forEach(btn => {
        btn.classList.remove("error")
    })
}

buttons.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        removeSelectedClasses();
        selected = e.target.textContent;
        console.log(selected);
        e.target.classList.add("selected");
    });
});

submit.addEventListener("click", (e) =>{
    if (selected === " "){
        addButtonErrors()
        setTimeout(() => {
            removeButtonErrors()
        },3000);
        return
    }

    selectiobMsg.textContent = `You Selected ${selected} out of 5`;
    box1.classList.add("d-none");
    box2.classList.remove("d-none");
})