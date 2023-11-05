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


def uefa_euro_2016(teams, scores):
    match_result = "won!" if scores[0] != scores[1] else "teams played draw."
    winning_team = teams[0] if scores[0] > scores[1] else teams[1]
    return "At match {} - {}, {} {}".format(teams[0], teams[1], "teams played draw" if scores[0] == scores[1] else winning_team, match_result)
