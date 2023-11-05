def cookie(x):
    if isinstance(x, str):
        name = "Zach"
    elif isinstance(x, (int, float)) and not isinstance(x, bool):
        name = "Monica"
    else:
        name = "the dog"
    return "Who ate the last cookie? It was {}!".format(name)
