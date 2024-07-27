var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault(); // Prevent the normal submission of the form

  // Get input value
  var newItem = document.getElementById("item").value;

  // Create new li element
  var li = document.createElement("li");

  // Add class
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create delete button element
  var deleteBtn = document.createElement("button");

  // Add classes to delete button
  deleteBtn.className = "btn btn-danger btn-sm delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter items
function filterItems(e) {
  // Get the text typed in the filter input
  var text = e.target.value.toLowerCase();

  // Get all list items
  var items = itemList.getElementsByTagName("li");

  // Convert HTMLCollection to an array and filter items
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
