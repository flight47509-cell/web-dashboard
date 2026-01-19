const statusValue = document.getElementById("status-value");
const usersValue = document.getElementById("users-value");
const uptimeValue = document.getElementById("uptime-value");
const statusUpdated = document.getElementById("status-updated");

async function loadStatus() {
  statusValue.textContent = "Loading...";
  usersValue.textContent = "Loading...";
  uptimeValue.textContent = "Loading...";
  if (statusUpdated) {
    statusUpdated.textContent = "Updating...";
  }

  try {
    const response = await fetch("http://127.0.0.1:5000/api/status");
    if (!response.ok) {
      throw new Error("API request failed");
    }
    const data = await response.json();
    statusValue.textContent = data.status;
    usersValue.textContent = data.users;
    uptimeValue.textContent = data.uptime;
    if (statusUpdated) {
      statusUpdated.textContent = `Last updated ${new Date().toLocaleTimeString()}`;
    }
  } catch (error) {
    statusValue.textContent = "Error";
    usersValue.textContent = "--";
    uptimeValue.textContent = "--";
    if (statusUpdated) {
      statusUpdated.textContent = "Failed to load data.";
    }
  }
}

loadStatus();
