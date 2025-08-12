# Tech Hub 2025 Fullstack Bootcamp
This repository contains all the projects, labs, and notes from the Tech Hub 2025 Fullstack Bootcamp. It documents a learning journey from web fundamentals to building full applications.

## Repository Structure

-   **`HTML+CSS-Task/`**: A multi-page static website built with pure HTML and CSS, serving as a foundation for web development principles.
-   **`Problem Solving with JS/`**: A collection of my solutions for JavaScript labs focused on strengthening core programming logic and algorithmic thinking.
-   **`React/`**: Contains applications built with React and Vite, demonstrating component-based architecture, state management, and API integration.

---

## Projects Overview

### 1. Tech Hub Website (`HTML+CSS-Task`)

A multi-page website for a fictional "Tech Hub". This project demonstrates foundational skills in web layout and styling.

**Key Features:**
*   Multiple linked pages (Home, About, Services, Contact, Learned).
*   Semantic HTML5 for structure and accessibility.
*   Custom CSS for styling, including Flexbox and advanced selectors.
*   A `Learned.html` page that acts as a journal, documenting the concepts covered during the bootcamp sessions.

### 2. JavaScript Problem Solving (`Problem Solving with JS`)

This directory contains a series of lab exercises designed to build a strong foundation in JavaScript. Each file tackles a specific problem, exploring different approaches and data structures.

**Examples of Problems Solved:**
*   `removeDuplicates.js`: Remove duplicate elements from an array.
*   `characterFrequency.js` & `wordFrequency.js`: Count the frequency of characters and words in a string.
*   `groupByAgeRange.js`: Group an array of user objects by age range.
*   `carsColorSwap.js`: Swap properties between objects in an array.
*   Array manipulation functions (`unshift`, `reduce`, `reverse`) implemented from scratch.

### 3. React Applications (`React/`)

This section includes my projects that created with React and Vite.

#### A. About Me App (`AboutMe-ReactApp`)

A simple, single-page personal portfolio application. It serves as an introduction to React's core concepts.

**Features:**
*   Built with React and Vite.
*   Component-based structure (e.g., `DescriptionSection`).
*   Styled with plain CSS to demonstrate fundamental styling in a React environment.

#### B. API Data Hub (`vite-project`)

A more complex application that fetches, displays, and routes data from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API.

**Features:**
*   **API Integration**: Uses `axios` to fetch data for posts, users, and todos.
*   **Routing**: Implements client-side routing with `react-router` to navigate between different pages (`/`, `/users`, `/posts`, `/todos`) and view detailed information (e.g., `/post/:id`, `/posts/:id/comments`).
*   **Dynamic Content**: Displays lists of data and allows users to view individual items and their related content (like post comments or user-specific todos).
*   **Component Architecture**: Organized into logical components for a clean and scalable structure, including a main `Layout`, page components, and reusable UI elements like `ConnectionErrorComp`.
*   **Pagination**: Custom pagination controls to navigate through large sets of data.
*   **Error Handling**: Displays a user-friendly message and a retry button if the API request fails.

---

## How to Run the React Applications

To run either of the React projects locally, follow these steps:

**Prerequisites:**
*   Node.js (v18 or later)
*   npm

**Instructions:**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/aya8merai/Tech-Hub-2025-Fullstack-Bootcamp.git
    cd Tech-Hub-2025-Fullstack-Bootcamp
    ```

2.  **Navigate to a project directory:**
    ```bash
    # For the API Data Hub
    cd React/vite-project

    # OR

    # For the About Me App
    cd React/AboutMe-ReactApp
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000` (for `vite-project`) or another specified port.

## Key Concepts Covered

This bootcamp covered a wide range of fullstack topics, including:

-   **Web Fundamentals**: How the web works (HTTP/HTTPS, DNS, APIs), client-server architecture, and different rendering techniques (CSR, SSR, SSG).
-   **HTML/CSS**: Semantic markup, the box model, Flexbox, and responsive design.
-   **JavaScript**: Core concepts (data types, hoisting, event loop), ES6+ features, advanced array methods, object manipulation, and asynchronous programming.
-   **React**: JSX, components, props, state (`useState`), lifecycle hooks (`useEffect`), context (`useContext`), conditional rendering, and the principles of `SOLID` design in a component context.
-   **Development Tools**: Git for version control, Vite for a modern build toolchain, and browser DevTools for debugging.
-   **API Integration**: Making `GET` requests with `axios` and handling asynchronous data, loading states, and errors.

## License

This repository is licensed under the **GNU General Public License v3.0**. See the `LICENSE` file for more details.
