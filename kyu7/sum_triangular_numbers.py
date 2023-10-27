
def triangular_number(n):
    if n < 1:
        return 0
    return n * (n + 1) // 2


def sum_triangular_numbers(n):
    if n < 1:
        return 0
    total = 0
    for i in range(1, n + 1):
        total += triangular_number(i)
    return total
