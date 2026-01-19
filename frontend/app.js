const statusValue = document.getElementById("status-value");
const usersValue = document.getElementById("users-value");
const uptimeValue = document.getElementById("uptime-value");

async function loadStatus() {
  try {
    const response = await fetch("http://127.0.0.1:5000/api/status");
    if (!response.ok) {
      throw new Error("API request failed");
    }
    const data = await response.json();
    statusValue.textContent = data.status;
    usersValue.textContent = data.users;
    uptimeValue.textContent = data.uptime;
  } catch (error) {
    statusValue.textContent = "Error";
    usersValue.textContent = "--";
    uptimeValue.textContent = "--";
  }
}

loadStatus();
