class Fighter(object):
    def __init__(self, name, health, damage_per_attack):
        self.name = name
        self.health = health
        self.damage_per_attack = damage_per_attack

    def __str__(self): return "Fighter({}, {}, {})".format(
        self.name, self.health, self.damage_per_attack)
    __repr__ = __str__


def declare_winner(fighter1, fighter2, first_attacker):
    hits_fighter1_can_take = (
        fighter1.health - 1) // fighter2.damage_per_attack + 1
    hits_fighter2_can_take = (
        fighter2.health - 1) // fighter1.damage_per_attack + 1

    if hits_fighter1_can_take == hits_fighter2_can_take:
        return first_attacker
    elif hits_fighter1_can_take > hits_fighter2_can_take:
        return fighter1.name
    else:
        return fighter2.name
        
