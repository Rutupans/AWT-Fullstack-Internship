function func1() {
    var x = document.getElementById("demo");
    if (x.innerHTML == "Paragraph changed.") {
        x.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, temporibus!";
    } else {
        x.innerHTML = "Paragraph changed.";
    }
}