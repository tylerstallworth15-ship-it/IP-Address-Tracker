const API_key = 'at_8FPC9eMlN6TiaN4yDTyLP0aCsAKZ8';
const API_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_key}`;

const form = document.getElementById('ip-form');
const input = document.getElementById('ip-input');

const ipText = document.getElementById('ip-value');
const locationText = document.getElementById('location-value');
const timezoneText = document.getElementById('timezone-value');
const ispText = document.getElementById('isp-value');

let map;
let marker;

document.addEventListener('DOMContentLoaded', () => {
    updateMap(37.38605, -122.08385); // Default to Mountain View, CA
});

async function fetchIPData(ip = "") {
    try {
        const trimmedIp = ip.trim();
        const url = trimmedIp 
            ? `${API_URL}&ipAddress=${encodeURIComponent(trimmedIp)}` 
            : API_URL;
        
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`Network Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("API data:", data);

        if (!data.location) {
            throw new Error("No location data found");
        }
    
        updateUI(data);
        updateMap(data.location.lat, data.location.lng);
    } catch (error) {
        alert("There was an error fetching the IP data: ");
        console.error(error)
        }
    }

function updateUI(data) {
    ipText.textContent = data.ip;
    locationText.textContent = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
    timezoneText.textContent = `UTC ${data.location.timezone}`;
    ispText.textContent = data.isp;
}

function updateMap(lat, lng) {
    if (!map) {
        map = L.map('map').setView([lat, lng], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
    }

    if (marker) {
        marker.remove();
    }

    marker = L.marker([lat, lng]).addTo(map);
    map.setView([lat, lng], 13);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchIPData(input.value);
});

fetchIPData();