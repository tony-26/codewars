def calculate_tip(amount, rating):
    rating = rating.lower()
    tips = {
        "terrible": 0,
        "poor": 5,
        "good": 10,
        "great": 15,
        "excellent": 20
    }
    if rating in tips:
        tip = amount * (tips[rating] / 100.0)
        return round(tip, 2)
    else:
        return "Rating not recognised"