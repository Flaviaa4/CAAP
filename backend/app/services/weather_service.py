import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("WEATHER_API_KEY")
BASE_URL = "https://api.openweathermap.org/data/2.5"

def get_weather(city: str):
    if not API_KEY:
        return {"success": False, "error": "API key not configured"}

    url = f"{BASE_URL}/weather?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        return {
            "success": True,
            "city": data["name"],
            "country": data["sys"]["country"],
            "temperature": data["main"]["temp"],
            "feels_like": data["main"]["feels_like"],
            "humidity": data["main"]["humidity"],
            "wind_speed": data["wind"]["speed"],
            "condition": data["weather"][0]["description"].capitalize()
        }
    elif response.status_code == 401:
        return {"success": False, "error": "Invalid API key"}
    elif response.status_code == 404:
        return {"success": False, "error": f"City '{city}' not found"}
    else:
        return {"success": False, "error": f"Something went wrong: {response.status_code}"}


def get_advisory(weather: dict):
    advice = []

    if not weather["success"]:
        return advice

    temp      = weather["temperature"]
    humidity  = weather["humidity"]
    wind      = weather["wind_speed"]
    condition = weather["condition"].lower()

    if temp > 35:
        advice.append("🌡 Extreme heat — avoid outdoor farm work midday, irrigate crops early morning.")
    elif temp > 30:
        advice.append("☀️ High temperature — water crops in the evening to reduce evaporation.")
    elif temp < 15:
        advice.append("🧥 Cool temperatures — protect sensitive crops from cold stress.")

    if "rain" in condition or "drizzle" in condition:
        advice.append("🌧 Rainfall detected — good time to plant. Avoid applying fertilizer today.")
    elif "storm" in condition or "thunderstorm" in condition:
        advice.append("⛈ Storm warning — secure equipment, move livestock to shelter immediately.")
    elif "clear" in condition and temp > 28:
        advice.append("🌱 Clear and warm — optimal planting conditions. Consider planting today.")

    if humidity > 80:
        advice.append("💧 High humidity — watch for fungal diseases on crops.")
    elif humidity < 30:
        advice.append("🏜 Low humidity — increase irrigation frequency.")

    if wind > 10:
        advice.append("💨 Strong winds — delay spraying pesticides or fertilizers.")

    if not advice:
        advice.append("✅ Weather conditions are normal. No urgent action needed.")

    return advice