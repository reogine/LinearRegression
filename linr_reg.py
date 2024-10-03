from sklearn.metrics import mean_squared_error, r2_score
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

sizes = np.array([650, 800, 1200, 1500, 2000, 2500, 3000, 3500, 4000])

prices = np.array([200, 250, 330, 400, 480, 560, 630, 710, 780])


sizes = sizes.reshape(-1, 1)

model = LinearRegression()
model.fit(sizes, prices)

predictions = model.predict(sizes)

mse = mean_squared_error(prices, predictions)
r2 = r2_score(prices, predictions)

print(f"Mean Squared Error: {mse}")
print(f"R-squared: {r2}")

plt.scatter(sizes, prices, color='blue', label='Original Prices')
plt.plot(sizes, predictions, color='red', label='Predicted Line')
plt.xlabel('House Size (sq ft)')
plt.ylabel('Price (in $1000)')
plt.legend()
plt.show()

