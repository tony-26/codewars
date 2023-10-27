def digits(n):
    str_num = str(n)
    return len(str_num)


print(digits(5), 1)
print(digits(12345), 5)
print(digits(9876543210), 10)
