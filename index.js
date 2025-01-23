function addTodoToList(txt) {
    const todoes = document.createElement("div");
    todoes.classList.add("add-todo-items");


    const txts = document.createElement("div");
    txts.classList.add("mokva-text");
    txts.innerHTML = txt;

   
    const icons = document.createElement("div");
    icons.classList.add("mokva-icons");

    const boxes = document.createElement("input");
    boxes.type = "checkbox";
    boxes.classList.add("mokva-checkbox");

    const deleteicons = document.createElement("img5");
    deleteicons.src = "images/delete-icons_trash-can.png";
    deleteicons.alt = "delete";
    deleteicons.classList.add("delete-icon");

    deleteicons.addEventListener("click", function() {
      
        todoes.remove();

   
        const todo1 = JSON.parse(localStorage.getItem("todo1")) || [];
        const todoes5 = todo1.filter(todo => todo !== txt); 
        localStorage.setItem("todo1", JSON.stringify(todoes5));
    });

    icons.appendChild(deleteicons);
    icons.appendChild(boxes);
    todoes.appendChild(txts);
    todoes.appendChild(icons);

    document.getElementById("todo-all-list").appendChild(todoes);
}


document.getElementById("btnsub").addEventListener("click", function(fun1) {
    fun1.preventDefault(); 

    const inforMation = document.getElementById("information");
        const inptxt = inforMation.value.trim(); 

    if (inptxt !== "") { 
        addTodoToList(inptxt); 


        const todo8 = JSON.parse(localStorage.getItem("todo8")) || [];
        todo8.push(todo8);
        localStorage.setItem("todo8", JSON.stringify(todo8)); 

        inforMation.value = "";
    }
});

