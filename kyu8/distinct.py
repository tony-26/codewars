def distinct(seq):
    result = []
    seen = set()
    for i in seq:
        if i not in seen:
            seen.add(i)
            result.append(i)
            print(seen)
    return result


print(distinct([1, 1, 1, 2, 3, 4, 5]))  # , [1, 2, 3, 4, 5]
