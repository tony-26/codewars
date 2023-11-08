def remove(s, n):
    result = ""
    for i in range(len(s)):
        if s[i] == '!' and n > 0:
            n -= 1
        else:
            result += s[i]
    return result
