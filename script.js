
// var items = document.querySelectorAll(".item");
// for (const item of items) {
//     item.addEventListener("click", function () {
//         document.getElementById("event_part").removeChild(item);
//     })

// }

document.getElementById("event_part").addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
})

document.getElementById("add_item").addEventListener("click", function () {
    var eventPart = document.getElementById("event_part")
    var li = document.createElement("li");
    li.classList.add("item")
    li.innerText = "Quia, eveniet amet!"
    eventPart.appendChild(li);

})