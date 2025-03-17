# **📌 Oefening: Haal je eigen IP-adres en locatie op met JavaScript**

## **🎯 Doel van de oefening**

Je gaat een webapplicatie bouwen die via externe API’s je **IP-adres** ophaalt en vervolgens je **geografische locatie** weergeeft.

De applicatie moet:
 ✅ **Je IP-adres ophalen** via een API.
 ✅ **Je locatiegegevens ophalen** met je IP-adres.
 ✅ **De gegevens tonen op de webpagina**.
 ✅ **Correcte foutafhandeling** hebben als er iets misgaat.
 ✅ **Geüpload worden naar GitHub via GitHub Desktop**.

------

## **🌍 Te gebruiken API’s**

### **1️⃣ IP-adres ophalen**

Gebruik de volgende API om het **publieke IP-adres** van de gebruiker op te halen:

📌 **URL:**

```
https://api.ipify.org/?format=json
```

📌 **Response voorbeeld:**

```
{
    "ip": "192.168.1.1"
}
```

### **2️⃣ Locatiegegevens ophalen**

Gebruik het opgehaalde IP-adres om de **geografische locatie** op te halen via deze API:

📌 **URL:**

```
https://ipinfo.io/JOUW_IP/geo
```

Vervang **JOUW_IP** door het werkelijke IP-adres dat je uit de eerste API hebt gekregen.

📌 **Response voorbeeld:**

```
{
    "ip": "192.168.1.1",
    "city": "Amsterdam",
    "region": "Noord-Holland",
    "country": "NL",
    "loc": "52.3676,4.9041"
}
```

Deze API geeft de volgende gegevens terug:

- **ip** → Het IP-adres van de gebruiker.
- **city** → De stad waarin de gebruiker zich bevindt.
- **region** → De regio of provincie.
- **country** → Het land (afkorting, zoals NL).
- **loc** → De breedte- en lengtegraad (coördinaten).

------

## **📜 Eisen**

- Gebruik **"use strict"** in je JavaScript-code.
- Gebruik **async/await** om de API-aanroepen te maken.
- Voeg een **knop** toe waarmee de gebruiker de gegevens kan ophalen.
- Toon op de pagina:
  - Het **IP-adres**.
  - De **stad, regio en land**.
  - Optioneel: de **coördinaten** van de gebruiker.
- Gebruik een **event listener** die pas na het laden van de pagina wordt geactiveerd.
- Voeg een **foutmelding** toe als de API-aanroepen mislukken.
- Gebruik **CSS** om de pagina visueel aantrekkelijk te maken.

------

## **📤 Inleveren**

1. **Upload je code naar GitHub** via **GitHub Desktop**.
2. **Commit en push je wijzigingen**.
