def stairs_in_20(stairs):
    total = 0
    for i in stairs:
        total += sum(i)
    return total*20
