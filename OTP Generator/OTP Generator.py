import secrets

def generate_otp(length = 8):
    return ''.join(str(secrets.randbelow(10))for _ in range(length))

print("Your OTP is:", generate_otp())