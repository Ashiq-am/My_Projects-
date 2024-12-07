import pyshorteners

# Prompt user for the URL to shorten
long_url = input("Enter the URL to shorten: ")

# Create a shortener instance
type_tiny = pyshorteners.Shortener()

# Shorten the URL using TinyURL service
short_url = type_tiny.tinyurl.short(long_url)

# Display the shortened URL
print("The Shortened URL is: " + short_url)
