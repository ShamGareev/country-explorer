document.getElementById('searchBtn').addEventListener('click', function() {
    const countryName = document.getElementById('countryInput').value.trim();
    const resultContainer = document.getElementById('resultContainer');

    if (countryName === "") {
        alert("Please enter a country name!");
        return;
    }

    // 1. We switch to a highly stable, CORS-friendly country data API
    const url = `https://date.nager.at/api/v3/AvailableCountries`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Network error");
            return response.json();
        })
        .then(countries => {
            // 2. Search through the list to find the country the user typed
            const foundCountry = countries.find(c => 
                c.name.toLowerCase() === countryName.toLowerCase() || 
                c.countryCode.toLowerCase() === countryName.toLowerCase()
            );

            if (!foundCountry) {
                resultContainer.innerHTML = `<p style="color: red;">Oops! Country not found. Make sure spelling is correct.</p>`;
                return;
            }

            // 3. Extract the clean data fields
            const name = foundCountry.name;
            const code = foundCountry.countryCode; // e.g., "AT", "FR", "US"
            
            // 4. Use a reliable public flag image service based on the country code
            const flagUrl = `https://flagsapi.com/${code}/flat/64.png`;

            // 5. Inject the data onto your screen!
            resultContainer.innerHTML = `
                <img src="${flagUrl}" class="flag" alt="Flag" style="width: 100px; height: auto; margin-bottom: 15px;">
                <h2>${name}</h2>
                <p><strong>Country Code:</strong> ${code}</p>
                <p style="color: green; font-size: 0.9em;">✔️ API Response Successful!</p>
            `;
        })
        .catch(error => {
            resultContainer.innerHTML = `<p style="color: red;">Connection error. Please try again.</p>`;
        });
});

// ==========================================
// NEW: Listen for Enter Key inside the input box
// ==========================================
document.getElementById('countryInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        // Automatically triggers the click event code above!
        document.getElementById('searchBtn').click();
    }
});