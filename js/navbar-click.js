function dropFunction(element) {
    closeDropdowns();
    element.classList.toggle("show");
    if (!element.classList.contains("show")) {
        document.activeElement.blur()
    }
}

function closeDropdowns() {
    var dropdowns = document.getElementsByClassName("dropdown");
    for (var i = 0; i < dropdowns.length; ++i) {
        if (dropdowns[i].classList.contains('show')) {
            dropdowns[i].classList.remove('show');
            // ∧ ∨
        }
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        closeDropdowns();
    }
}