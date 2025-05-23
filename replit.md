# DreamsTour Cruise Booking Platform

## Overview

DreamsTour is a luxury cruise booking platform that allows users to browse, search, and book cruise vacations. The application features a modern React frontend with a Node.js/Express backend. It uses Drizzle ORM for database interactions and follows a clean architecture pattern with separate client and server directories.

The project aims to provide a visually appealing and user-friendly interface for booking cruise vacations, with features like cruise listings, detailed cruise information, booking management, and a user dashboard.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built using React with TypeScript, utilizing a component-based architecture. Key architectural decisions include:

1. **UI Component Library**: Uses a combination of custom components with Shadcn UI and Ant Design for a cohesive design system. This provides a balance between customizability and development speed.

2. **State Management**: Uses React Query for server state management, providing efficient caching, refetching, and synchronization with the server.

3. **Routing**: Utilizes React Router for client-side routing, enabling a smooth single-page application experience.

4. **Styling**: Employs Tailwind CSS for utility-first styling, making it easy to create responsive designs consistently without writing custom CSS.

### Backend Architecture

The backend is built with Express.js and follows a modular structure:

1. **API Routes**: All routes are prefixed with `/api` for clear separation between API calls and static content.

2. **Controllers**: Business logic is organized in controller files that handle specific domains (e.g., cruises, bookings).

3. **Data Storage**: Uses Drizzle ORM with PostgreSQL for database interactions, providing type safety and query building.

4. **Authentication**: Basic user authentication system is implemented with the `users` table schema already defined.

### Database Schema

The project uses PostgreSQL with Drizzle ORM. The database schema includes:

1. **Users**: Store user information including username and password.
2. **Cruises**: Currently being managed through mock data, but schema would include cruise details, pricing, itineraries, etc.
3. **Bookings**: Currently using mock data, but would store booking information, payment details, etc.

## Key Components

### Frontend Components

1. **Layout**: Main layout component that wraps all pages, including header and footer.

2. **UI Components**: Extensive set of UI components from Shadcn UI (accordion, buttons, cards, etc.) and custom components (PageHeader, PaymentSuccessModal).

3. **Pages**:
   - Home: Landing page with featured cruises and search functionality
   - CruiseList: Page displaying all available cruises with filtering
   - CruiseDetails: Detailed view of a selected cruise
   - CruiseBooking: Multi-step booking process
   - BookingConfirmation: Confirmation page after successful booking
   - Dashboard: User dashboard showing booking history and stats

4. **Form Components**: Various form components for search, booking, and payment processing.

### Backend Components

1. **API Routes**: Defined in `server/routes/api.ts`, handling various endpoints for cruises and bookings.

2. **Controllers**: 
   - `cruiseController.ts`: Handles cruise-related operations
   - `bookingController.ts`: Manages booking processes

3. **Storage Interface**: A modular storage interface that abstracts database operations, making it easy to switch between storage implementations.

## Data Flow

1. **User Browsing Flow**:
   - User visits the homepage
   - Searches for cruises by destination, date, or other filters
   - Views the list of matching cruises
   - Selects a cruise to view details

2. **Booking Flow**:
   - User selects a cruise and proceeds to booking
   - Completes a multi-step booking form (personal details, cabin selection, payment)
   - Receives booking confirmation with details
   - Can view booking details in their dashboard

3. **Server-Client Communication**:
   - Frontend makes API requests to the backend for data
   - Backend processes requests, interacts with the database, and returns responses
   - React Query manages caching and synchronization of server state

## External Dependencies

### Frontend Dependencies

1. **UI Libraries**:
   - Ant Design (`antd`)
   - Radix UI components (various primitive UI components)
   - Shadcn UI (built on top of Radix UI)

2. **State Management**:
   - TanStack React Query (`@tanstack/react-query`)

3. **Form Handling**:
   - React Hook Form (`@hookform/resolvers`)

4. **Utilities**:
   - Date-fns for date manipulation
   - clsx and tailwind-merge for class name management

### Backend Dependencies

1. **Database**:
   - Drizzle ORM (`drizzle-orm`)
   - Neon Serverless Postgres (`@neondatabase/serverless`)

2. **Validation**:
   - Zod (`zod`) for schema validation

3. **Session Management**:
   - PostgreSQL session store (`connect-pg-simple`)

## Deployment Strategy

The application is set up for deployment on Replit with specific configurations:

1. **Development Mode**:
   - Uses Vite's development server for hot module replacement
   - Express backend serves API routes
   - Both run concurrently with the `npm run dev` command

2. **Production Build**:
   - Frontend is built with Vite (`vite build`)
   - Backend is bundled with esbuild
   - Static assets are served from the `dist/public` directory

3. **Environment Configuration**:
   - Uses environment variables for database connections and other configurations
   - Database URL is required via `DATABASE_URL` environment variable

4. **Replit Configuration**:
   - Configured to use Node.js 20, Web, and PostgreSQL 16 modules
   - Deployment target is set to "autoscale"
   - Build and run commands are defined in the `.replit` file

## Development Tasks

### Immediate Tasks

1. **Complete API Endpoints**:
   - Implement the API routes defined in `server/routes/api.ts`
   - Connect the controllers to the database using the storage interface

2. **Database Setup**:
   - Set up PostgreSQL tables using Drizzle schema
   - Implement the storage interface methods for CRUD operations

3. **Connect Frontend to Backend**:
   - Replace mock data with actual API calls to the backend
   - Implement error handling and loading states

### Future Enhancements

1. **Authentication System**:
   - Implement user registration and login
   - Add protected routes for user-specific content

2. **Payment Integration**:
   - Add a payment processor integration
   - Implement secure handling of payment information

3. **Admin Dashboard**:
   - Create an admin interface for managing cruises and bookings
   - Add analytics and reporting features