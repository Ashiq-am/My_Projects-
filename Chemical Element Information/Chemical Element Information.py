import periodictable


def element_info(symbol):
    # Get the element using its symbol
    element = getattr(periodictable, symbol, None)

    if element is None:
        print("Element not found.")
        return

    # Prepare element information
    info = {
        "Name": element.name,
        "Atomic Number": element.number,
        "Atomic Mass": element.mass,
        "Density": element.density,
    }

    # Display element information
    for key, value in info.items():
        print(f"{key}: {value}")


# Input the element symbol
symbol = input("Enter the element symbol: ").capitalize()
element_info(symbol)
