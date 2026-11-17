# FinanceTracker

FinanceTracker is a responsive React application for managing personal income, expenses, categories, and monthly budgets. It provides a dashboard with financial summaries, spending information, recent transactions, and navigation between the application's main sections.

The application is built with React 19 and Vite. It currently uses browser storage instead of a backend API, making it suitable for learning and frontend demonstration purposes.

## Features

- Login flow using local demo credentials
- Session-based login state using `sessionStorage`
- Dashboard with total balance, income, and expense summaries
- Spending overview grouped by expense category
- Recent transactions view
- Add and delete transactions
- Income and expense transaction types
- Add custom income and expense categories
- Add and delete monthly budgets
- Budget summary for the selected month
- Responsive navigation between Dashboard, Transactions, Budgets, Categories, and Settings
- Fixed desktop sidebar with independently scrolling content sections
- Responsive mobile navigation layout
- Custom content scrollbar for desktop sections
- Light and dark themes
- Theme preference saved in `localStorage`
- Shared CSS design tokens for colors, spacing, surfaces, borders, and shadows

## Technologies

- React 19
- React Router DOM 7
- Vite 8
- JavaScript (ES modules)
- CSS with custom properties
- ESLint

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and move into the project directory:

```bash
git clone <repo-url>
cd FinanceTracker
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Available Scripts

```bash
npm run dev       # Start the Vite development server
npm run build     # Create a production build
npm run lint      # Run ESLint checks
npm run preview   # Preview the production build locally
```

## Demo Login Credentials

The login page currently validates against local demo data in `data/userData.js`:

| Username | Password |
| --- | --- |
| `admin` | `123456` |

This is not production authentication. Credentials are stored in the frontend source and should only be used for demonstration.

## Data Persistence

Application data is stored in the browser using `localStorage`:

| Storage key | Data |
| --- | --- |
| `financeTransactions` | Transactions |
| `financeCategories` | Categories |
| `financeBudget` | Budgets |
| `theme` | Selected light or dark theme |

The current logged-in user is stored in `sessionStorage` using the `loggedInUser` key. Logging out removes the current session.

Clearing browser storage resets the locally saved application data.

## Project Structure

```text
FinanceTracker/
├── data/                 # Demo user data and initial application data
├── src/
│   ├── components/       # Dashboard, transactions, budgets, categories, settings, and forms
│   ├── context/          # Authentication and shared finance state
│   ├── layouts/          # Main authenticated application layout
│   ├── pages/            # Login page
│   ├── shared/           # Navigation menu and modal components
│   ├── App.css           # Application shell, modal, button, and scrollbar styles
│   ├── App.jsx           # Application routes
│   ├── index.css         # Global reset, theme variables, and base styles
│   └── main.jsx          # React entry point and providers
├── package.json
└── README.md
```

## Current Limitations

- There is no backend or database integration.
- Authentication is frontend-only and is not secure for production use.
- Data is stored per browser and is not synchronized between devices.
- Search and filtering functionality is not fully implemented.
- Transactions and budgets cannot currently be edited after creation.
- There are no automated unit, integration, or end-to-end tests yet.

## Future Improvements

- Add a backend API and database persistence.
- Implement secure authentication and authorization.
- Add transaction and budget editing.
- Add transaction search, filtering, and sorting.
- Add date and month selection controls.
- Add richer income and expense trend charts.
- Add automated tests.
- Add data export and import functionality.

## License

This project is intended for learning and demonstration purposes.
