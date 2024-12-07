import secrets

def generate_otp(length):
    return ''.join(str(secrets.randbelow(10)) for _ in range(length))

# Taking OTP length input from the user
length = int(input("Enter the OTP length: "))

print("Your OTP is:", generate_otp(length))
