const buttons = document.querySelectorAll('button');

const divList1 = document.querySelector(".food-body-div-1-items");

const divList2 = document.querySelector(".food-body-div-2-list");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const ul = divList2.querySelector("ul");
        if(button.id =="add") {
            const li = document.createElement("li");
            li.classList.add(button.className);
            li.textContent = divList1.querySelector("." + button.className).textContent;
            ul.appendChild(li);
        }
        else if(button.id == "remove") {
            const li = divList2.querySelector("." + button.className);
            ul.removeChild(li);
        }
    })
})