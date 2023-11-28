// Fetch data from the server
fetch('https://simpleapis-production.up.railway.app/getAll')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Call the function with the fetched JSON response
        createTable(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., display an error message to the user
    });

// Create a table dynamically
function createTable(data) {
    var tableContainer = document.getElementById("tableContainer");

    var table = document.createElement("table");

    // Create table header
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");

    Object.keys(data[0]).forEach(function(key) {
        var th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    var tbody = document.createElement("tbody");

    data.forEach(function(item) {
        var row = document.createElement("tr");

        Object.values(item).forEach(function(value) {
            var td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    tableContainer.appendChild(table);
}
