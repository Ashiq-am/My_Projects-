import periodictable

# Prompt user for the atomic number of the element
Atomic_No = int(input("Enter Atomic No : "))

# Retrieve the element details using the atomic number
element = periodictable.elements[Atomic_No]

# Print the element details
print('Name:', element.name)
print('Symbol:', element.symbol)
print('Atomic mass:', element.mass)
print('Density:', element.density)
