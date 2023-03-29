def cube_checker(volume, side):
    if volume <= 0:
        return False
    if volume == side**3:
        return True
    else:
        return False
