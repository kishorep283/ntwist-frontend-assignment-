const toggleBtn = document.getElementById('toggleBtn');
    const navbar = document.getElementById('navbarSubdiv');
    toggleBtn.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });
function sortList() {
    var list = document.getElementById("nameList");
    var items = list.getElementsByTagName("li");
    var itemsArray = Array.from(items);
    var sortOrder = document.getElementById("sortOrder").value;
    if (sortOrder === "asc") {
        itemsArray.sort(function(a, b) {
            return a.textContent.localeCompare(b.textContent); 
        });
    } else if (sortOrder === "desc") {
        itemsArray.sort(function(a, b) {
            return b.textContent.localeCompare(a.textContent); 
        });
    }

    list.innerHTML = "";
    for (var i = 0; i < itemsArray.length; i++) {
        list.appendChild(itemsArray[i]);
    }
}