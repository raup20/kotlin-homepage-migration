# Kotlin Homepage Migration (React Router 7 + SSR)

This project migrates a legacy React homepage from the Kotlin website to
**React Router 7 Framework Mode with Server-Side Rendering (SSR)**.

The original source project is a simplified version of
https://kotlinlang.org containing only the homepage.

## Features

-   React Router 7 Framework Mode
-   Server-Side Rendering (SSR)
-   Preserved visual layout of the original Kotlin homepage
-   Interactive functionality preserved:
    -   Kotlin code example tabs
    -   Sorting in the usage highlights section
-   Component-based structure

## Installation

Clone the repository:

    git clone https://github.com/raup20/kotlin-homepage-migration.git
    cd kotlin-homepage-migration

Install dependencies:

    npm install

## Development

Run the development server:

    npm run dev

Open:

    http://localhost:5173

## Production

Build the project:

    npm run build

Start the SSR server:

    npm run start

## Notes

-   The project contains only the homepage.
-   Navigation links are intentionally non-functional, matching the
    original assignment constraints.

