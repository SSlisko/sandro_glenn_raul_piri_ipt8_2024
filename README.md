## Ideen

- **Kioskapp mit anderen Technologien entwickeln und weiterführen**
- Blackjack Online Spiel
- Simple Habitapp

## Technologien

- Vue
- JS
- PHP
- Laravel
- HTML/CSS
- MongoDB
- MySQL
- MSSQL

## Konzept und Planung

Das Projekt wird eine einfache Kiosk App sein, entwickelt mit Vue.js für das Frontend und Laravel für das Backend. Unser Ziel ist es, eine intuitive Benutzeroberfläche mit einer robusten Backend-Integration zu schaffen. Die ersten Meilensteine umfassen das Einrichten der Projektstruktur, das Entwickeln der Grundfunktionalitäten und die Implementierung der Datenbankanbindung. Wir werden kleine, realistische Ziele setzen, um den Fortschritt kontinuierlich zu verfolgen und anzupassen.

## ER-Diagramm Datenbank
<img src="./images/ERM.png" alt="ERM" height="400">


## Lokales Setup

### Commands für Docker

- docker compose up -d
  Alle Docker Container im Hintergrund starten
 
- docker compose exec laravel php artisan migrate:fresh --seed
  Laravel Container neu seeden und migrieren
 
- docker compose down
  Alle Docker Container herunterfahren
 

### Run Fontend in Dev Mode

- npm run dev
  Startet die Applikation im Localhost

### Frontend Anleitung

- Gewünschte Artikel mit Filterfunktion suchen 
- Artikel per klick der Rechnung hinzufügen
- Per Knopfdruck Rechnung anzeigen
- Artikel löschen, hinzufügen oder Menge ändern und Preise betrachten
- (Rechnung bezahlen)
