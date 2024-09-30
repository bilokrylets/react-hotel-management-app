# Hotel Management Application

This project is a full-featured CRUD application for managing hotel operations. The backend and database are powered by **Supabase**, while the frontend is built with **React**, **TypeScript**, and several supporting libraries. The application provides user account management, room and booking operations, as well as a theme switcher and statistics page with dynamic filtering and charts.

## Features

- **User Account Management:**
  - Account creation and authentication using **Supabase**
  - Edit user profile: update name, avatar, and password
- **Cabins Management:**
  - View list of cabins
  - Create, edit, and duplicate cabins entries
- **Booking Management:**
  - View list of hotel bookings
  - Edit and delete bookings
- **Theme Switcher:**
  - Switch between dark and light themes
- **Statistics Dashboard:**
  - View statistics with filters for the last 7, 30, or 90 days
  - Visualize data using **Recharts** for graphical representation

## Tech Stack

- **Frontend:**

  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [React Query](https://react-query-v3.tanstack.com/)
  - [Styled Components](https://styled-components.com/)
  - [React Hook Form](https://react-hook-form.com/)
  - [React Router DOM](https://reactrouter.com/)
  - [Recharts](https://recharts.org/) (for data visualization)

- **Backend & Database:**
  - [Supabase](https://supabase.io/) (for database and authentication)

## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bilokrylets/react-hotel-management-app
   ```

2. **Install dependencies:**

```bash
  npm i
```

3.  **Run the development server:**

```bash
  npm run dev
```

This will compile the application and open it in your default web browser.
Open your browser and navigate to http://localhost:5173/ (default value for Vite).
