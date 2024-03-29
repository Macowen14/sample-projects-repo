function updateClock() {
    let now = new Date();
    
    // Define arrays for day and month names
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Get current day, date, month, and year
    const day = dayNames[now.getDay()]; // Get day name
    const date = now.getDate();
    const month = monthNames[now.getMonth()]; // Get month name
    const year = now.getFullYear();

    // Get current hour, minute, and second
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    
    // Format the date to display day, date, month, and year
    let formatedDate = `${day}, ${date} ${month} ${year}`;
    let time = `${hour}:${minute}:${second}`;
    
    // Display time and date in the respective HTML elements
    document.getElementById('clock').innerHTML = time;
    document.getElementById('date').innerHTML = formatedDate;
}

// Call the updateClock function on page load
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);