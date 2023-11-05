def uefa_euro_2016(teams, scores):
    str = ""
    if scores[0] < scores[1]:
        str = "At match " + teams[0] + " - " + \
            teams[1]+", " + teams[1] + " won!"
    elif scores[1] < scores[0]:
        str = "At match " + teams[0] + " - " + \
            teams[1]+", " + teams[0] + " won!"
    else:
        str = "At match " + teams[0] + " - " + \
            teams[1]+", teams played draw."

    return str
