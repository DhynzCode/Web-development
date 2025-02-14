// Simulated user data for the admin panel
const users = [
    { id: 1, username: "devuser1", email: "dev1@example.com", status: "Active" },
    { id: 2, username: "devuser2", email: "dev2@example.com", status: "Pending" },
    { id: 3, username: "devuser3", email: "dev3@example.com", status: "Banned" }
];

// Display user list in the User Management section
function displayUsers() {
    const userList = document.getElementById("user-list");
    userList.innerHTML = ""; // Clear the list first
    users.forEach(user => {
        userList.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.status}</td>
                <td><button onclick="changeStatus(${user.id})">Change Status</button></td>
            </tr>
        `;
    });
}

// Handle status change (example functionality)
function changeStatus(userId) {
    alert(`Change status for User ID: ${userId}`);
}

// Example: Applying a system update
function applyUpdate() {
    alert("System update applied successfully!");
}

// Initialize the admin panel
document.addEventListener("DOMContentLoaded", () => {
    displayUsers();
});
