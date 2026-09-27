# BetterRoutes

BetterRoutes is a cross-platform React Native mobile application designed for **dynamic, traffic-aware route optimization and live truck tracking**. It targets both Android and iOS using a single TypeScript codebase.

The core objective of BetterRoutes is to provide a navigation and fleet-tracking system that can continuously account for **current vehicle location, road conditions, traffic, estimated travel time, and route changes** rather than relying on a static route calculated only once.

The project is being developed as a modular system so that authentication, maps, location tracking, routing, traffic analysis, and future fleet-management capabilities can be integrated independently.

## Project Vision

BetterRoutes is intended to provide a workflow such as:

```text
User Authentication
        ↓
Map & Current Location
        ↓
Select Destination
        ↓
Retrieve Available Routes
        ↓
Analyze Distance, Travel Time & Traffic
        ↓
Determine an Efficient Route
        ↓
Display Route & Navigation Information
        ↓
Continuously Monitor Vehicle Location
        ↓
Update Route When Conditions Change
```

For truck-oriented use cases, the system can eventually be extended to support multiple vehicles, live fleet tracking, route monitoring, and operational insights.

## Planned Core Features

### Authentication

* User registration and login.
* Secure authentication through an external authentication provider.
* Persistent authenticated sessions.
* User-specific application data.

### Maps & Location

* Interactive map interface.
* Real-time device location.
* Current-location marker.
* Destination selection.
* Location search and geocoding.
* Continuous location updates during a journey.

### Traffic-Aware Routing

BetterRoutes is intended to use routing and traffic data to calculate routes based on current road conditions.

The routing system will consider factors such as:

* Road distance.
* Estimated travel time.
* Current traffic conditions.
* Route alternatives.
* Changes in traffic conditions during a journey.

The application should be capable of updating the selected route when the current route becomes significantly less efficient because of changing conditions.

### Dynamic ETA

Estimated arrival time should be based on current routing and traffic information rather than simply calculating ETA from distance and an assumed constant speed.

The system can periodically recalculate:

```text
Current Location
      +
Current Traffic
      +
Remaining Route
      ↓
Updated Travel Time
      ↓
Updated ETA
```

### Live Truck Tracking

For truck-based use cases, BetterRoutes is intended to support:

* Live truck location.
* Continuous location updates.
* Route progress monitoring.
* Destination tracking.
* Current ETA.
* Route deviation detection.
* Future multi-truck fleet tracking.

### Route Optimization

The long-term routing system is intended to compare available route alternatives and determine an efficient route based on the application's defined optimization criteria.

Potential factors include:

* Travel time.
* Distance.
* Traffic conditions.
* Road conditions and restrictions where available.
* Vehicle-specific constraints where supported by the routing service.

The optimization logic will remain separate from the user interface so that routing algorithms and external routing services can be changed without rebuilding the entire application.

## Current Implementation

The project currently contains the initial React Native application foundation.

Implemented:

* React Native 0.87 foundation.
* TypeScript-based application structure.
* Android native project.
* iOS native project.
* Splash screen with temporary branding.
* Automatic transition from splash screen to the authentication landing screen.
* Login and Sign up placeholder actions.
* Centralized application colors, spacing, typography, and branding constants.
* Initial navigation structure prepared for future application screens.
* Initial service and utility structure prepared for future integrations.

Authentication, maps, GPS tracking, routing, traffic services, and route optimization are **not yet fully integrated**.

## Future Development

The application will progressively expand through the following stages:

```text
Application Foundation
        ↓
Authentication
        ↓
Map Integration
        ↓
GPS / Location Services
        ↓
Destination Search
        ↓
Routing Service
        ↓
Traffic-Aware ETA
        ↓
Alternative Route Comparison
        ↓
Dynamic Route Updates
        ↓
Live Truck Tracking
        ↓
Fleet Management
        ↓
Advanced Route Optimization
```

Future capabilities may include:

* Multiple route alternatives.
* Real-time route recalculation.
* Route deviation alerts.
* Truck-specific routing constraints.
* Multiple vehicle tracking.
* Fleet overview.
* Trip history.
* Route history.
* Driver/vehicle management.
* Delivery or destination management.
* Navigation-related notifications.
* Analytics and operational statistics.

These features will be implemented incrementally and may depend on the capabilities and limitations of the external mapping, routing, traffic, and location services selected during development.

## Project Structure

```text
BetterRoutes/
│
├── src/
│   ├── components/
│   │   └── Shared and reusable UI components
│   │
│   ├── screens/
│   │   └── Application screens
│   │
│   ├── navigation/
│   │   └── Application navigation and route selection
│   │
│   ├── constants/
│   │   └── Application-wide constants and configuration
│   │
│   ├── theme/
│   │   └── Colors, spacing, typography, and design tokens
│   │
│   ├── services/
│   │   └── Authentication, maps, location, routing,
│   │       traffic, and other external integrations
│   │
│   ├── types/
│   │   └── Shared TypeScript domain types
│   │
│   └── utils/
│       └── Shared utility and calculation functions
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── branding/
│
├── android/
│   └── Native Android project
│
├── ios/
│   └── Native iOS project
│
├── .env.example
├── package.json
└── README.md
```

## Technology

* **React Native** — Cross-platform mobile application framework.
* **TypeScript** — Application programming language and type system.
* **Android** — Native Android build and runtime environment.
* **iOS** — Native iOS build and runtime environment.
* **External mapping/routing services** — Planned for maps, geocoding, traffic, and route calculation.
* **Authentication service** — Planned for secure user authentication.
* **Backend services** — Planned for application data, routing logic, fleet functionality, and other server-side operations.

The exact external providers may change during development based on API capabilities, pricing, reliability, platform support, and project requirements.

## Getting Started

Install a current Node.js version supported by React Native along with the required Android or iOS development environment.

Install dependencies:

```sh
npm install
```

Start Metro:

```sh
npm start
```

Run the Android application:

```sh
npm run android
```

On macOS with Xcode configured, run the iOS application:

```sh
npm run ios
```

For iOS development, install CocoaPods dependencies after the first clone or after native dependency changes:

```sh
bundle install
bundle exec pod install --project-directory=ios
```

Refer to the official React Native environment documentation for platform-specific development requirements.

## Environment Variables

`.env.example` defines the configuration boundary for services that will be integrated into the application.

It should contain only variable names and example values.

Real credentials, API keys, tokens, and environment-specific secrets must remain outside version control.

```text
.env.example    → Safe to commit
.env            → Local/private configuration
```

## Development Principles

BetterRoutes is being developed with the following architectural principles:

* One React Native codebase for Android and iOS.
* Separation between UI, navigation, business logic, services, and utilities.
* External APIs isolated behind service modules.
* Sensitive credentials kept outside source control.
* Reusable TypeScript types shared across application modules.
* Routing and optimization logic kept independent from UI components.
* Incremental development and testing of each major subsystem.
* Architecture designed to accommodate future fleet-management functionality.

## Project Status

**Status: Active Development**

The current version represents the initial application foundation. The routing, traffic, GPS, and live truck-tracking systems are planned components of the project and will be integrated progressively.
