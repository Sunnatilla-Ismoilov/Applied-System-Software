# DIP392-Brave03
- [Link to the Report](https://docs.google.com/document/d/1T6yts7mA5S-oa5GCyJWDVsF1Bsq82MPPj0vTWIsw54E/edit?usp=sharing)
- [Link to the project](https://dip-392-brave03.vercel.app/)
- [Link to the presentation](https://www.canva.com/design/DAGFyJHXzS8/SCokEXHmMB4UuC9BQogG0w/edit?utm_content=DAGFyJHXzS8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Spinning Wheel Game
This project implements a spinning wheel game using functional programming principles in JavaScript. The game allows players to spin a wheel and win points based on where the wheel stops.

## Features
- Spinning wheel animation using Chart.js library.
- Player input for names.
- Score tracking for multiple players.
- Dynamic update of scores and display of results.

## Usage
To interact with the system, follow these steps:
1. Clone the repository to your local machine: `git clone <repository-url>`
2. Open the `index.html` file in a web browser.
3. Enter the names of the players in the input fields provided.
4. Enter the maximum score of the game in the input fields provided.
5. Click the "Spin" button to start the spinning animation of the wheel.
6. The wheel will stop at a random position, and the corresponding value will be displayed as the result.
7. Scores will be updated based on the result, and the player with the highest score wins.

## Documentation
### Code Structure
- **HTML_Element**: Represents the HTML elements used in the code, such as the wheel, spin button, and score displays.
- **Chart**: Manages the spinning wheel chart using the Chart.js library.
- **DataStructure**: Contains data structures for rotation values, chart data, and colors.
- **Functions**: Implements functions for value generation and event handling.
- **EventListener**: Binds event listeners to HTML elements to handle user interactions.

### Functional Programming
- Emphasizes the use of pure functions, immutability, and higher-order functions.
- Manipulates the DOM using functional approaches, such as function composition and immutability.
- Utilizes functional data structures and library integration to achieve desired behavior.

### Error Handling
- Error handling is implemented using functional programming techniques, such as Maybe or Either monads, for predictable and composable error handling.

### Testing
- Testing methodologies include property-based testing and unit testing, leveraging pure functions and predictable data transformations.

## Dependencies
- **Chart.js**: Used for rendering and animating the spinning wheel chart.
  - [Link to Chart.js documentation](https://www.chartjs.org/docs/latest/)

## License
This project is licensed under the MIT License.
