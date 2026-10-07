# Admin Dashboard

A responsive admin dashboard built with React 19, Vite, Tailwind CSS, React Router, and Lucide icons. The project provides a clean workspace for managing users, products, orders, and roles, with reusable dashboard navigation and form layouts.

## Live Demo

The project is ready to deploy, but no public deployment URL is configured in this repository yet.

**Live demo:** [Add your deployed dashboard URL here](https://admindashboardv2-git-main-shakeelahamad.vercel.app)

**Source code:** [github.com/ShakeelAhamad/AdminDashboard](https://github.com/ShakeelAhamad/AdminDashboard)

## Features

- Responsive admin layout with collapsible mobile sidebar and top navigation
- Dashboard summary cards for users, active users, orders, and revenue
- Recent orders dashboard panel with order status indicators
- Login and registration screens with responsive split-panel designs
- User list and user form for adding user details, roles, status, and join date
- Product list and product form for product name, category, price, stock, and status
- Order list with customer, total, item count, status, and date columns
- Role list and role form for role name, status, and joined date
- Profile page with administrator contact information and account details
- Settings page and shared navigation structure
- Loading states and mock API service with sample dashboard data

## Routes

| Page | Route |
| --- | --- |
| Login | `/login` |
| Sign up | `/signup` |
| Dashboard | `/dashboard` |
| Users list | `/user/list` |
| User form | `/user/form` |
| Products list | `/product/list` |
| Product form | `/product/form` |
| Orders list | `/orders` |
| Roles list | `/role/list` |
| Role form | `/role/form` |
| Profile | `/profile` |
| Settings | `/settings` |

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- React Router
- Lucide React
- ESLint

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

### Create a production build

```bash
npm run build
```

### Run lint checks

```bash
npm run lint
```

## Project Structure

```text
src/
├── components/       Shared UI components
├── config/           Navigation and page title configuration
├── data/              Mock dashboard data
├── layout/            Sidebar, topbar, and main layout
├── pages/             Dashboard, lists, forms, auth, profile, and settings
└── services/          Mock API service layer
```

## Data Source

The current UI uses sample data from `src/data/dummyData.js` through the service methods in `src/services/api.js`. Replace these methods with your backend endpoints when connecting the dashboard to a real API.

