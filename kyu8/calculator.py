def calculator(x, y, op):
    arr = ["+", "-", "*", "/"]
    if op not in arr:
        return "unknown value"

    if op == '+':
        return x + y
    elif op == '-':
        return x - y
    elif op == '*':
        return x * y
    elif op == '/':
        if y == 0:
            return "unknown value"
        return x / y
