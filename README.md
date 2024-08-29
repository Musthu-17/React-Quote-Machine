
# Random Quote and Image Generator

This project is a simple React application that displays a random quote and a random background image every time the page is loaded or refreshed. The application fetches quotes from the Quotable API and random images from Picsum Photos. Users can also tweet the quote directly from the application.

## Features

- **Random Quotes:** Fetches and displays a random quote from the Quotable API.
- **Random Background Images:** Fetches and displays a random image from Picsum Photos as the background.
- **Tweet Quotes:** Allows users to tweet the displayed quote directly via Twitter.
- **Loading Indicator:** Displays a loading spinner while fetching the image.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/random-quote-image-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd random-quote-image-generator
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The application will run at `http://localhost:3000`.

## Usage

- When the page loads, a random quote and background image will be displayed.
- Click the **Inspire Me** button to refresh the page and fetch a new quote and image.
- Click the Twitter icon to tweet the displayed quote.

## Project Structure

- **App.js:** The main component that handles fetching the quote and image, and rendering them.
- **Box Component:** Displays the fetched quote, author, and action buttons.
- **Loading Component:** Displays a loading icon while the image is being fetched.
- **App.css:** Contains the styling for the application.

## Dependencies

- **React:** JavaScript library for building user interfaces.
- **FontAwesome:** Icon library for adding icons (Twitter icon used here).

## APIs Used

- **Quotable API:** Provides random quotes.
- **Picsum Photos:** Provides random images.

## License

This project is licensed under the MIT License.

---

This README file provides a brief overview of the project, how to set it up, and its features. Feel free to modify it to suit your specific needs or project details.