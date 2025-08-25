# Clever Fund Search

A modern web application for searching and filtering investment funds using natural language queries and advanced filtering options.

## Features

- Natural language search for funds
- Advanced filtering and sorting capabilities
- Responsive design with modern UI components
- Real-time search results
- Admin panel for fund management

## Technologies Used

- **Frontend**: React 18 with TypeScript
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Database**: Supabase
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM

## Getting Started:

### Prerequisites

- Node.js 18+ and npm
- Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd clever-fund-search
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to configure your project.

### Environment Variables

Make sure to set the following environment variables in your Vercel project:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## Project Structure

```
src/
├── components/     # Reusable UI components
├── data/          # Data and mock data
├── hooks/         # Custom React hooks
├── integrations/  # External service integrations
├── lib/           # Utility functions
├── pages/         # Page components
├── types/         # TypeScript type definitions
└── utils/         # Helper utilities
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
