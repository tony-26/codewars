
def God():
    return [Man('Adam'), Woman('Eve')]


class Human:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"{self.name}, a {self.__class__.__name__}"


class Man(Human):
    pass


class Woman(Human):
    pass
