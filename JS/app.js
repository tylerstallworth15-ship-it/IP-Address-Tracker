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

function updateMap(lat, lng) {
    if (!map) {
        map = L.map('map').setView([lat, lng], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);