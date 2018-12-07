// Set initial variables
var tableData = data;
var tbody = d3.select("tbody");
var filterButton = d3.select("#filter-btn");

// Function to clear populated table
function clearData() {
    document.getElementById("livedata").innerHTML = "";
}

// Populate the empty HTML table based on given dataset in list
// of JS Objects. 
function getTable(dataSet) {
    dataSet.forEach(function(ufoReport) {
        var newRow = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
            var newCell = newRow.append("td");
            newCell.text(value);
        });
    });
}

// Populate the table with everything initially
getTable(tableData);

// Filter by date event listener
filterButton.on("click", function() {

    // Clear the current input
    clearData();

    // No page refreshing
    d3.event.preventDefault();

    // Select the input field
    var inputField = d3.select("#datetime")

    // Get the user's input
    var userInput = inputField.property("value")

    // Change this if it doesn't work
    // var dateFilter = tableData.filter(date => date.datetime === userInput);
    // getTable(dateFilter);

    var dateFilter = tableData.filter(function(date) {
        return date.datetime === userInput});
    
    getTable(dateFilter);

    console.log(dateFilter.length)

});

