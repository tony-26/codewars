def is_sorted_and_how(arr):
    ascending = True
    descending = True
    for i in range(len(arr)-1):
        if arr[i] > arr[i+1]:
            ascending = False
        elif arr[i] < arr[i+1]:
            descending = False
        else:
            return "no"

    if ascending:
        return "yes, ascending"
    elif descending:
        return "yes, descending"
    else:
        return "no"
