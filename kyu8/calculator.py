def calculator(x, y, op):
    arr = ["+", "-", "*", "/"]
    print(x, y, op)
    if op not in arr:
        return "unknown value"
    if not isinstance(y, int):
        return "unknown value"
    if not isinstance(x, int):
        return "unknown value"

    if op == '+':
        return int(x) + int(y)
    elif op == '-':
        return int(x) - int(y)
    elif op == '*':
        return int(x) * int(y)
    elif op == '/':
        if y == 0:
            return "unknown value"
        return int(x) / int(y)
