def hello(name):
    if len(name) > 0:
        proper_name = name[0].upper() + name[1:].lower()
        return "Hello, " + proper_name + "!"
    else:
        return "Hello, World!"
