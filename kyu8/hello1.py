def hello(name=None):
    if name and name.strip():
        formatted_name = name[0].upper() + name[1:].lower()
        return f"Hello, {formatted_name}!"
    else:
        return "Hello, World!"
