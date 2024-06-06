// Simulated health data
let healthData = {
    heartRate: 80,
    BloodPressure: 90,
    temperature: 36.5,
    steps: 5000,
    timestamp: new Date().toLocaleString()
};

// Function to update health data and display it
function updateHealthData() {
    // Simulate updating health data
    healthData.heartRate = Math.floor(Math.random() * 40) + 60; // Random heart rate between 60 and 100
    healthData.BloodPressure = Math.floor(Math.random() * 45) + 80;
    healthData.temperature = Math.floor(Math.random() * 5) + 35; // Random temperature between 35.0 and 40.0
    healthData.steps += Math.floor(Math.random() * 1000); // Increment steps by a random value

    // Update timestamp
    healthData.timestamp = new Date().toLocaleString();

    // Display updated health data
    let healthDataElement = document.getElementById("healthData");
    healthDataElement.innerHTML = `
        <h2>Health Data</h2>
        <p>Heart Rate: ${healthData.heartRate} bpm</p>
        <p> Blood Pressure: ${healthData.BloodPressure} mmHg</p>
        <p>Temperature: ${healthData.temperature} °C</p>
        <p>Steps: ${healthData.steps}</p>
        <p>Timestamp: ${healthData.timestamp}</p>
    `;
}

// Update health data every 5 seconds
setInterval(updateHealthData, 5000);

// Initial display of health data
updateHealthData();
