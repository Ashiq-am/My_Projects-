from imdb import IMDb

# Create an instance of the IMDb class
ia = IMDb()

# Get movie name from the user
movie_name = input("Enter the movie name: ")

# Search for the movie in IMDb
movies = ia.search_movie(movie_name)

if movies:
    # Get the first movie from the search results
    movie = movies[0]
    
    # Update the movie to get detailed information
    ia.update(movie)

    # Print all available details of the movie
    print("\nMovie Details:")
    for key, value in movie.items():
        print(f"{key.capitalize()}: {value}")
else:
    print("Movie not found.")
