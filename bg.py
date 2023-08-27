# import matplotlib.pyplot as plt
# import numpy as np

# # Create a new figure with a specific size (aspect ratio 16:9, but half the vertical size)
# fig = plt.figure(figsize=(1920/80, (1080/2)/80)) # Half the height of a typical 1080p screen.

# # Set the background color
# fig.patch.set_facecolor('black')

# # Add a subplot
# ax = fig.add_subplot(111)
# ax.set_facecolor('black')

# # Generate x values
# x = np.linspace(0, 10, 5000)  # Increased number of points

# # Create more complex curves
# offset1 = np.random.uniform(-1, 1)
# offset2 = np.random.uniform(-1, 1)
# freq1 = np.random.uniform(0.5, 1.5)  # Frequency 1
# freq2 = np.random.uniform(1.5, 2.5)  # Frequency 2
# damp = np.random.uniform(0.1, 0.3)  # Damping factor
# y_complex = (np.sin(freq1 * (x + offset1)) + 0.5 * np.sin(freq2 * (x + offset2))) * np.exp(-damp * x)

# # Generate varying uncertainty bounds
# uncertainty = 0.5 * (x-5)**2/25 + 0.5  # Parabolic uncertainty increasing at the beginning and decreasing towards the end
# y_lower = y_complex - uncertainty  # Lower bound
# y_upper = y_complex + uncertainty  # Upper bound

# # Plot the "particles" with violet color and markers with transparency
# ax.plot(x, y_complex, color=(0.93, 0.51, 0.93), linewidth=0.5)  # Violet color

# # Plot the uncertainty bounds with the same color but more transparency
# ax.fill_between(x, y_lower, y_upper, color=(0.93, 0.51, 0.93, 0.15))

# # Add random dots
# num_dots = 500
# indices = np.random.randint(0, len(x), num_dots)  # Generate random indices
# x_dots = x[indices]
# y_dots = [np.random.uniform(y_lower[i], y_upper[i]) for i in indices]
# ax.scatter(x_dots, y_dots, color=(0.93, 0.51, 0.93), edgecolors='none', s=1)  # Violet color

# # Remove axes for a cleaner look
# plt.axis('off')

# # Save as PNG with a high DPI (for a higher resolution image)
# plt.savefig('output.png', bbox_inches='tight', pad_inches=0, dpi=300, facecolor=fig.get_facecolor())

import matplotlib.pyplot as plt
import numpy as np
from matplotlib.animation import FuncAnimation

# Create a new figure with a specific size (aspect ratio 16:9, but half the vertical size)
fig, ax = plt.subplots(figsize=(1920/80, (1080/2)/80)) # Half the height of a typical 1080p screen.

# Set the background color
fig.patch.set_facecolor('black')
ax.set_facecolor('black')

# Generate x values
x = np.linspace(0, 10, 5000)  # Increased number of points

# Create more complex curves
offset1 = np.random.uniform(-1, 1)
offset2 = np.random.uniform(-1, 1)
freq1 = np.random.uniform(0.5, 1.5)  # Frequency 1
freq2 = np.random.uniform(1.5, 2.5)  # Frequency 2
damp = np.random.uniform(0.1, 0.3)  # Damping factor

# Generate varying uncertainty bounds
uncertainty = 0.5 * (x-5)**2/25 + 0.5  # Parabolic uncertainty increasing at the beginning and decreasing towards the end

# Initialize the plot
line, = ax.plot(x, np.sin(x), color=(0.93, 0.51, 0.93), linewidth=0.5)
fill = ax.fill_between(x, np.sin(x), np.sin(x), color=(0.93, 0.51, 0.93, 0.15))
dots, = ax.plot([], [], 'o', color=(0.93, 0.51, 0.93), markersize=3)

# Remove axes for a cleaner look
plt.axis('off')

# Function to update the plot
def update(frame):
    ax.clear()
    ax.set_facecolor('black')
    plt.axis('off')
    
    x_shift = 0.1 * (100 - frame)
    y_complex = (np.sin(freq1 * (x + offset1 - x_shift)) + 0.5 * np.sin(freq2 * (x + offset2 - x_shift))) * np.exp(-damp * (x - x_shift))
    
    # Generate varying uncertainty bounds
    uncertainty = 2 * (0.5 * (x-5)**2/25 + 0.5)  # Doubled the amplitude of uncertainty
    y_lower = y_complex - uncertainty  # Lower bound
    y_upper = y_complex + uncertainty  # Upper bound
    
    # Determine the index that corresponds to the rightmost 30% of the data
    index_30_percent = int(0.7 * len(x))
    
    # Plot the leftmost 70% of the data with a violet color
    ax.plot(x[:index_30_percent], y_complex[:index_30_percent], color=(0.93, 0.51, 0.93), linewidth=1.2)
    ax.fill_between(x[:index_30_percent], y_lower[:index_30_percent], y_upper[:index_30_percent], color=(0.93, 0.51, 0.93, 0.15), edgecolor=(0.93, 0.51, 0.93), linewidth=0.2)
    
    # Plot the rightmost 30% of the data with a cyan color
    ax.plot(x[index_30_percent:], y_complex[index_30_percent:], color='cyan', linewidth=1.2)
    ax.fill_between(x[index_30_percent:], y_lower[index_30_percent:], y_upper[index_30_percent:], color=(0, 1, 1, 0.15), edgecolor=(0, 1, 1), linewidth=0.2)
    
    num_dots = 500
    indices = np.random.randint(0, len(x), num_dots)  # Generate random indices
    x_dots = x[indices]
    y_dots = [np.random.uniform(y_lower[i], y_upper[i]) for i in indices]
    ax.scatter(x_dots[index_30_percent:], y_dots[index_30_percent:], color=(0.93, 0.51, 0.93), edgecolors='none', s=2)  # Cyan color
    ax.scatter(x_dots[:index_30_percent], y_dots[:index_30_percent], color=(0.93, 0.51, 0.93), edgecolors='none', s=2)  # Violet color
    ax.set_ylim(-4, 4)

# Create an animation
ani = FuncAnimation(fig, update, frames=np.arange(0, 200), repeat=False)

# Save the animation as a gif
ani.save('output.gif', writer='imagemagick', fps=10, dpi=150)

plt.show()




