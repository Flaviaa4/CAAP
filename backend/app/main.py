from flask import Flask
from flask_cors import CORS
from app.routes.weather import weather_bp

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(weather_bp, url_prefix="/api")

    @app.route("/")
    def home():
        return {"message": "CAAP Backend is running ✅"}

    return app