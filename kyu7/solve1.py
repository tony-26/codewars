def solve(arr):
    results = []
    for word in arr:
        match_count = 0
        word = word.lower()
        for position, character in enumerate(word, start=1):
            expected_ascii = ord('a') + position - 1
            expected_character = chr(expected_ascii)

            if character == expected_character:
                match_count += 1
        results.append(match_count)

    return results


print(solve(["abode", "ABc", "xyzD"]), [4, 3, 1])
print(solve(["abide", "ABc", "xyz"]), [4, 3, 0])
print(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]), [6, 5, 7])
print(solve(["encode", "abc", "xyzD", "ABmD"]), [1, 3, 1, 3])
