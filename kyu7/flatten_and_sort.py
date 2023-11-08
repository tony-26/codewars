def flatten_and_sort(array):
    flattened_list = [num for sublist in array for num in sublist]
    return sorted(flattened_list)
