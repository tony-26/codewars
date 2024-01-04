def cube_odd(arr):
    sum_of_cubes = 0
    for x in arr:
        if not isinstance(x, int):
            return None
        if x % 2 != 0:
            sum_of_cubes += x ** 3
    return sum_of_cubes


print(cube_odd([1, 2, 3, 4]), 28)
print(cube_odd([-3, -2, 2, 3]), 0)
print(cube_odd(["a", 12, 9, "z", 42]), None)
