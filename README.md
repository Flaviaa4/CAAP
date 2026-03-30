# CAAP — Climate Action & Advisory Platform

> Empowering African communities to respond to climate change through real-time monitoring, actionable insights, and educational tools.


## Live Demo

| | URL |
|---|---|
| **Frontend** | https://flaviaa4.github.io/CAAP |
| **Backend API** | https://caap-1.onrender.com |


## About the Project

CAAP is a full-stack web application built for African communities — particularly smallholder farmers, youth leaders, NGOs, and local decision-makers. It provides:

- **Real-time weather data** for any African city or Rwandan district
- **Smart climate advisory** farming advice generated automatically from weather conditions
- **Learning modules** on crop resilience, water conservation, youth climate action, and climate science
- **Community reporting** users can submit and view local climate incident reports
- **Interactive map** showing climate alert zones across Africa
- **Government policies & NGO resources** for climate adaptation


## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, React Router, Axios, Leaflet |
| Backend | Python, Flask, Flask-CORS |
| Weather Data | OpenWeatherMap API |
| Frontend Hosting | GitHub Pages |
| Backend Hosting | Render |
| Version Control | Git & GitHub |


## Project Structure

CAAP/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py                 
│   │   ├── routes/
│   │   │   ├── __init__.py
│   │   │   └── weather.py           
│   │   └── services/
│   │       ├── __init__.py
│   │       └── weather_service.py   
│   ├── tests/
│   │   └── test1.py               
│   ├── .env                         
│   ├── requirements.txt            
│   ├── render.yaml                 
│   └── run.py                      
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── WeatherCard.js
│   │   │   ├── AdvisoryCard.js
│   │   │   ├── LearningCard.js
│   │   │   ├── CommunityReports.js
│   │   │   ├── ReportModal.js
│   │   │   ├── GovernmentPolicies.js
│   │   │   └── NgoResources.js
│   │   ├── pages/
│   │   │   ├── LearningHome.js
│   │   │   ├── CropResilience.js
│   │   │   ├── YouthClimateAction.js
│   │   │   ├── WaterDrought.js
│   │   │   └── ClimateScience.js
│   │   ├── services/
│   │   │   └── api.js               
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── .gitignore
└── README.md


## Local Setup — Step by Step

Follow these steps exactly to run CAAP on your machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org) (v18 or higher)
- [Python](https://python.org) (v3.10 or higher)
- [Git](https://git-scm.com)


### 1️⃣ Clone the Repository

bash
git clone https://github.com/Flaviaa4/CAAP.git
cd CAAP


### Get a Free OpenWeatherMap API Key

1. Go to https://openweathermap.org/api
2. Create a free account
3. Go to **API Keys** tab
4. Copy your API key
5. New keys take **10–15 minutes** to activate


### Set Up the Backend
bash
cd backend

**Install Python dependencies:**

bash
python -m pip install -r requirements.txt

**Create the `.env` file:**

bash
touch .env

Open `.env` and paste:

WEATHER_API_KEY=your_openweathermap_api_key_here

Replace `your_openweathermap_api_key_here` with your actual API key.

**Start the Flask backend:**

bash
python run.py

You should see:
* Running on http://127.0.0.1:5000

**Test it works — open your browser and go to:**

http://127.0.0.1:5000/api/advisory?city=Kigali

You should see JSON weather data. 


### Set Up the Frontend

Open a **new terminal** (keep the backend running).

bash
cd frontend

**Install Node dependencies:**

bash
npm install

**Start the React app:**

bash
npm start

The app will automatically open at:
```
http://localhost:3000
```

---

### You're Running!

| Service | URL |
|---|---|
| React Frontend | http://localhost:3000 |
| Flask Backend | http://127.0.0.1:5000 |
| Weather endpoint | http://127.0.0.1:5000/api/weather?city=Kigali |
| Advisory endpoint | http://127.0.0.1:5000/api/advisory?city=Kigali |


## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check if backend is running |
| GET | `/api/weather?city={city}` | Get current weather for a city |
| GET | `/api/advisory?city={city}` | Get weather + farming advisory |

**Example response for `/api/advisory?city=Kigali`:**

json
{
  "weather": {
    "city": "Kigali",
    "country": "RW",
    "temperature": 22.5,
    "feels_like": 21.8,
    "humidity": 72,
    "wind_speed": 3.1,
    "condition": "Light rain",
    "success": true
  },
  "advisory": [
    " Rainfall detected — good time to plant. Avoid applying fertilizer today.",
    " High humidity — watch for fungal diseases on crops."
  ]
}

## Deployment

### Backend — Render

1. Go to https://render.com and sign in with GitHub
2. Click **New** → **Web Service**
3. Connect the **CAAP** repository
4. Set the following:

Root Directory:  backend
Build Command:   pip install -r requirements.txt
Start Command:   gunicorn run:app


5. Add environment variable:

WEATHER_API_KEY = your_api_key


6. Click **Deploy**

### Frontend — GitHub Pages

bash
cd frontend
npm run deploy

The app will be live at:
https://flaviaa4.github.io/CAAP


## Troubleshooting

| Problem | Solution |
|---|---|
| `pip: command not found` | Use `python -m pip install` instead |
| API returns 401 | Your API key is invalid or not activated yet (wait 15 min) |
| Frontend shows "Cannot connect to backend" | Make sure Flask is running on port 5000 |
| Map not showing | Check internet connection — map uses OpenStreetMap tiles |
| Backend slow on first load | Free Render plan sleeps after inactivity — first request wakes it up (30–60 sec) |


## Author

**Flavienne BENIHIRWE**  
African Leadership University  
Software Engineering — 2026


## References

- African Development Bank Group. (2025). Climate change impacts in Africa. https://www.afdb.org
- Food and Agriculture Organization. (2020). Digital tools for climate-smart agriculture. https://www.fao.org
- United Nations Environment Programme. (2022). Adaptation Gap Report. https://www.unep.org
- OpenWeatherMap API. https://openweathermap.org/api
- Leaflet.js. https://leafletjs.com