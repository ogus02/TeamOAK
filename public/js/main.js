function myFunction() {
    const change = document.getElementById("burger-links");
    if (change.style.display === "block") {
        change.style.display = "none";
    } else {
        change.style.display = "block";
    }
}