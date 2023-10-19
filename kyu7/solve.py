def solve(arr):
    result = []
    for num in reversed(arr):
        if num not in result:
            result.insert(0, num)

    return result


(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3])
(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3])
(solve([1, 2, 3, 4]), [1, 2, 3, 4])
(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1])
