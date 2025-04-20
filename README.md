# PDF RAG Application

This is a monorepo containing both the client and server components of the PDF RAG application.

## Project Structure

```
.
├── client/          # Next.js frontend application
├── server/          # Node.js backend server
├── package.json     # Root package.json for workspace management
└── README.md        # This file
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

   - Copy `.env.sample` to `.env` in both client and server directories
   - Fill in the required environment variables

3. Run the development environment:

```bash
npm run dev
```

This will start both the client and server concurrently.

## Available Scripts

- `npm run dev` - Start both client and server in development mode
- `npm run client` - Start only the client
- `npm run server` - Start only the server

## Development

- Client runs on: http://localhost:3000
- Server runs on: http://localhost:3001
