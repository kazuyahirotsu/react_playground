const onClickAdd = () =>{
    console.log("onClickAdd func");
    //get text and reset
    const textEl = document.getElementById("add-text");
    const text = textEl.value;
    textEl.value = "";

    //make elements for text and remove button
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = text;
    const button = document.createElement("button");
    button.textContent = "remove";

    //remove li when clicked
    button.addEventListener("click", () => {
        const deleteTarget = button.closest("li");
        document.getElementById("memo-list").removeChild(deleteTarget);
    });

    //setup elements
    div.appendChild(p);
    div.appendChild(button);
    li.appendChild(div);
    document.getElementById("memo-list").appendChild(li);
};

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
console.log("js read")