# Clima - Real-time Weather Forecast & Air Quality App

## Overview

Clima is a modern weather application built with Next.js and TailwindCSS that provides real-time weather forecasts, air quality data, and detailed meteorological information for cities worldwide. The app features a clean, intuitive interface with dark mode support and responsive design.

## Features

- Real-time weather data and forecasts
- Air quality monitoring
- UV index tracking
- 5-day weather forecast
- City-based weather search
- Detailed meteorological information:
  - Temperature (current, min, max)
  - Humidity levels
  - Wind speed and direction
  - Visibility conditions
  - Atmospheric pressure
  - Sunrise and sunset times
- Dark mode support
- Responsive design for all devices

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- Radix UI Components
- Embla Carousel
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Nainee99/clima.git
cd clima
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your API keys:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_openweather_api_key
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Build for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

```
clima/
├── app/                # Next.js app directory
│   ├── api/           # API routes
│   ├── components/    # React components
│   ├── context/       # Global context
│   ├── providers/     # App providers
│   └── utils/         # Utility functions
├── components/        # Shared UI components
├── lib/               # Library code
├── public/            # Static assets
└── styles/           # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Weather data provided by OpenWeather API
- UI components from shadcn/ui
- Icons from Lucide React
