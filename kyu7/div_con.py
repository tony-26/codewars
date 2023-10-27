def div_con(x):
    total = 0
    for element in x:
        if isinstance(element, int):
            total += element
        elif isinstance(element, str):
            total -= int(element)

    return total
