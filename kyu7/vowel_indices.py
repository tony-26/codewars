def vowel_indices(word):
    v = "aeiou"
    count = 0
    result = []
    for i in range(len(word)):
        if word[i] in v:
            result.append(i+1)

    return result
