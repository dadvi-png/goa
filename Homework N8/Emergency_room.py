import numpy as np
np.random.seed(4353)
ER_data_weekdays=np.random.poisson(lam=10, size=(5, 24))
ER_data_weekends=np.random.poisson(lam=15, size=(2, 24))
ER_data=np.vstack((ER_data_weekdays, ER_data_weekends))
hours_sum=ER_data.sum(axis=0)
busiest_hour=hours_sum.argmax()
average_weekend=ER_data_weekends.mean(axis=1).sum()
average_weekdays=ER_data_weekdays.mean(axis=1).sum()
max_hour=ER_data.max()
location=np.unravel_index(ER_data.argmax(), ER_data.shape)
day, hour=location
night_shift=ER_data[ :, 0:8]
print(f"busiest hour:{busiest_hour}")
print(f"average load for weekdays:{average_weekdays}")
print(f"average load for weekends:{average_weekend}")
print(f"maximum at:{hour}. day that it happened:{day}")
print(max_hour)
print(night_shift)
