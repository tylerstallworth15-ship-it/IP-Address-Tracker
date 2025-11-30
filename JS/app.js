const API_key = 'at_8FPC9eMlN6TiaN4yDTyLP0aCsAKZ8';
const API_URL = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_8FPC9eMlN6TiaN4yDTyLP0aCsAKZ8';

const form = document.getElementById('ip-form');
const input = document.getElementById('ip-input');

const ipText = document.getElementById('ip-value');
const locationText = document.getElementById('location-value');
const timezoneText = document.getElementById('timezone-value');
const ispText = document.getElementById('isp-value');

let map;
let marker;

async function fetchIPData(ip = "") {
    try {
        const trimmedIp = ip.trim();
        const url = trimmedIp 
        ? `${API_URL}&ipAddress=${encodeURIComponent(trimmedIp)}` 
        : API_URL;
        
        const response = await fetch(url);
        const data = await response.json();

        if (data.code || !data.location) {
            throw new Error(data.messages || "Error fetching data");
        }
    
        updateUI(data);
        updateMap(data.location.lat, data.location.lng);

    } catch (error) {
        alert("Invalid IP address")
        console.error(error);
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