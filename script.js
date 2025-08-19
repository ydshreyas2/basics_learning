// Replace with your deployed API Gateway / Amplify API endpoint
const API_URL = "https://elk72ih29f.execute-api.ap-south-1.amazonaws.com/records";

document.getElementById("userForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("nameInput").value;

    try {
        // POST request to backend
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name })
        });

        loadRecords();
    } catch (err) {
        console.error("Error submitting record:", err);
    }
});

async function loadRecords() {
    try {
        const response = await fetch(API_URL);
        const records = await response.json();

        const tbody = document.querySelector("#recordsTable tbody");
        tbody.innerHTML = "";

        records.forEach(item => {
            const row = `<tr>
                <td>${item.name}</td>
                <td>${new Date(item.timestamp).toLocaleString()}</td>
            </tr>`;
            tbody.innerHTML += row;
        });
    } catch (err) {
        console.error("Error loading records:", err);
    }
}
