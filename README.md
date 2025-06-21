# Omnia Backend

A NestJS backend application with Prisma ORM, PostgreSQL database, and JWT authentication.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Docker** and **Docker Compose** - [Download here](https://www.docker.com/products/docker-desktop/)
- **Git** - [Download here](https://git-scm.com/)

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd omnia-back
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
# Database Configuration
DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres?schema=public"

# JWT Configuration
JWT_SECRET="your-super-secret-jwt-key-here"
JWT_EXPIRES_IN="24h"

# Application Configuration
PORT=3000
NODE_ENV=development
```

**Important:** Replace `your-super-secret-jwt-key-here` with a strong, unique secret key for JWT token generation.

### 4. Start PostgreSQL Database

Using Docker Compose:

```bash
docker compose -f docker-compose.postgres.yml up -d
```

This will start a PostgreSQL database with the following configuration:

- **Host:** localhost
- **Port:** 5432
- **Database:** postgres
- **Username:** postgres
- **Password:** password

### 5. Run Database Migrations

```bash
npx prisma migrate dev --name init
```

This command will:

- Apply all pending migrations to the database
- Generate the Prisma client
- Create the database schema

### 6. Generate Prisma Client

```bash
npx prisma generate
```

## Running the Application

### Development Mode

```bash
npm run start:dev
```

The application will be available at `http://localhost:3000`

### Production Mode

```bash
npm run build
npm run start:prod
```

### Debug Mode

```bash
npm run start:debug
```

## Available Scripts

- `npm run build` - Build the application
- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with hot reload
- `npm run start:debug` - Start in debug mode
- `npm run start:prod` - Start in production mode
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run test:cov` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Database Management

### View Database in Prisma Studio

```bash
npx prisma studio
```

This opens a web interface at `http://localhost:5555` to view and edit your database.

### Reset Database

```bash
npx prisma migrate reset
```

### Create New Migration

```bash
npx prisma migrate dev --name <migration-name>
```

## API Documentation

Once the application is running, you can access the Swagger API documentation at:

```
http://localhost:3000/api
```

## Project Structure

```
src/
├── auth/           # Authentication module (JWT, Guards)
├── booking/        # Booking management
├── cal-api/        # Calendar API integration
├── client/         # Client management
├── database/       # Database configuration
├── event-type/     # Event type management
├── user/           # User management
└── main.ts         # Application entry point
```

## Features

- **Authentication & Authorization** - JWT-based authentication with Passport
- **Database Management** - PostgreSQL with Prisma ORM
- **API Documentation** - Swagger/OpenAPI documentation
- **Validation** - Request validation with class-validator
- **Testing** - Jest testing framework
- **Code Quality** - ESLint and Prettier configuration

## Troubleshooting

### Database Connection Issues

1. Ensure Docker is running
2. Check if PostgreSQL container is up: `docker ps`
3. Verify DATABASE_URL in your `.env` file
4. Try restarting the database: `docker compose -f docker-compose.postgres.yml restart`

### Port Already in Use

If port 3000 is already in use, change the PORT in your `.env` file or kill the process using that port.

### Prisma Issues

1. Regenerate Prisma client: `npx prisma generate`
2. Reset database: `npx prisma migrate reset`
3. Check Prisma schema: `npx prisma validate`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm test`
5. Submit a pull request

## License

This project is private and unlicensed.
