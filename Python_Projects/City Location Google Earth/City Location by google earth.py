import webbrowser

def find_city_on_google_earth(city_name):
    # Format the URL with the search query
    google_earth_url = f'https://earth.google.com/web/search/{city_name}'

    # Open Google Earth in the default web browser with the search query
    webbrowser.open(google_earth_url)

# Example: Find city on Google Earth
city_name = input("Enter city name: ")
find_city_on_google_earth(city_name)
