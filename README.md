# FinanceTracker

## Available Scripts

Start the development server:

FinanceTracker is a React application for tracking income, expenses, balances, spending categories, and recent transactions.

The project was created with React and Vite. It currently uses local dummy data to demonstrate the application's user interface and functionality.

## Features

- Dashboard overview
- Balance, income, and expense summary cards
- Spending overview chart
- Recent transactions list
- Add transaction form
- Transaction categories
- Income and expense management
- Navigation between dashboard sections
- Responsive component-based layout

## Technologies

- React
- Vite
- JavaScript
- CSS
- ESLint

## Project Structure

```bash
src
├── assets            # Assets like images and fonts
├── components        # Reusable components
├── layouts           # Layout components
├── pages             # Page components
├── services          # API services and mock data
```

## Getting Started

### Prerequisites

Install the following software before running the project:

- Node.js
- npm

### Installation

Clone the repository: `git clone <repo-url>`
Navigate to the project directory:

Install the dependencies:

## Dummy Data

The application currently uses local dummy data files:

- `data/financeData.js`
- `data/transactionData.js`
- `data/categoryData.js`
- `data/userData.js`

The data is used to populate the dashboard and transaction views. Transactions are not currently stored in a database or backend service.

## Current Limitations

- Data is not persisted after the application is closed.
- The transaction page currently uses separate dummy data.
- Search functionality is not implemented yet.
- Budget and category management are currently placeholders.
- Authentication is not implemented.
- Backend integration is not implemented.

## Future Improvements

- Add local storage or database persistence.
- Use one shared transaction state across the application.
- Add transaction editing and deletion.
- Implement transaction search and filtering.
- Add charts for income and expense trends.
- Add budget management.
- Add authentication.
- Connect the application to a backend API.
- Add unit and component tests.

## License

This project is intended for learning and demonstration purposes.

## Demo Login Credentials

The application currently uses local demo authentication. Use either account below:

| Username | Password |
|----------|----------|
| `admin`  | `123456` |

These credentials are for demonstration only. Authentication is not connected to a backend service.
