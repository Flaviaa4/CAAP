from flask import Blueprint, jsonify, request
from app.services.weather_service import get_weather, get_advisory

weather_bp = Blueprint("weather", __name__)

@weather_bp.route("/weather", methods=["GET"])
def weather():
    """Get current weather for a city."""
    city = request.args.get("city", "Kigali")  # default to Kigali
    
    weather_data = get_weather(city)
    
    return jsonify(weather_data)


@weather_bp.route("/advisory", methods=["GET"])
def advisory():
    """Get weather + climate advice for a city."""
    city = request.args.get("city", "Kigali")
    
    weather_data = get_weather(city)
    advice = get_advisory(weather_data)
    
    return jsonify({
        "weather": weather_data,
        "advisory": advice
    })