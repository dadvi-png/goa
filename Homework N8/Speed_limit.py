import numpy as np
np.random.seed(908)
car_speeds=np.random.randint(70, 161, size=1000)
speeders=car_speeds[car_speeds>100]
percent_of_speeders=(len(speeders)/len(car_speeds))*100
fastest=speeders.max()
average_total=car_speeds.mean()
average_speeders=speeders.mean()
revenue=100+5*(car_speeds-100).sum()
print(f"total speeders:{len(speeders)}")
print(f"percentage of speeders:{percent_of_speeders}%")
print(f"fastest car:{fastest}")
print(f"average speed for all cars:{average_total}")
print(f"average speed of speeders:{average_speeders}")
print(f"total revenue from fines:{revenue}")
