import requests

API_KEY = "d413ccf4899c84c9daa35cf0b98543be"
CITY    = "Kigali"
URL     = f"https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}&units=metric"

def test_api():
    print(f"Testing API for city: {CITY}...")

    response = requests.get(URL)

    if response.status_code == 200:
        data = response.json()
        print("\n✅ API is working! Here is the data:")
        print(f"   City        : {data['name']}, {data['sys']['country']}")
        print(f"   Temperature : {data['main']['temp']}°C")
        print(f"   Feels like  : {data['main']['feels_like']}°C")
        print(f"   Humidity    : {data['main']['humidity']}%")
        print(f"   Wind speed  : {data['wind']['speed']} m/s")
        print(f"   Condition   : {data['weather'][0]['description'].capitalize()}")

    elif response.status_code == 401:
        print("❌ Invalid API key — it may still be activating, wait 15 min and retry")

    elif response.status_code == 404:
        print(f"❌ City not found.")

    else:
        print(f"❌ Error: {response.status_code}")

if __name__ == "__main__":
    test_api()