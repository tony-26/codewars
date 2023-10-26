def vowel_indices(word):
    v = "aeiouAEIOU"
    count = 0
    result = []
    for i in range(len(word)):
        if word[i] in v:
            result.append(i+1)

    return result


print(vowel_indices("apple"))  # [1, 5]
print(vowel_indices("UNDISARMED"))  # [1, 4, 6, 9]
