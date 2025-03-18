"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    const actieKnop = document.querySelector('#submitButton');
    actieKnop.addEventListener('click', ophalenIPAdres);
}

async function ophalenIPAdres() {
    try {
        const antwoord = await fetch('https://api.ipify.org/?format=json');
        const gegevens = await antwoord.json();

        await zoekLocatieDetails(gegevens.ip);
    } catch (error) {
        console.log('Probleem bij ophalen IP:', error);
    }
}

async function zoekLocatieDetails(ipAdres) {
    const ipTekst = document.querySelector('#infoIp');
    const stadTekst = document.querySelector('#infoStad');
    const regioTekst = document.querySelector('#infoRegio');
    const landTekst = document.querySelector('#infoLand');

    try {
        const webAdres = 'https://ipinfo.io/' + ipAdres + '/geo';
        const antwoord = await fetch(webAdres);
        const locatieInfo = await antwoord.json();

        ipTekst.innerHTML = 'IP: ' + ipAdres;
        stadTekst.innerHTML = 'Stad: ' + locatieInfo.city;
        regioTekst.innerHTML = 'Regio: ' + locatieInfo.region;
        landTekst.innerHTML = 'Land: ' + locatieInfo.country;
    } catch (error) {
        console.log('Fout bij ophalen locatie:', error);
    }
}