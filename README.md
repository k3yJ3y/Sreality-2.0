# Sreality 2.0 - Web Scraping and Data Presentation
Sreality 2.0 is a web scraping and data presentation project that collects information from the [Sreality](https://www.sreality.cz/en/search/for-sale/apartments) website and serves it in a user-friendly format. It includes three main components: a web scraper, a backend API, and a frontend web application, all designed to run using Docker.
## Description
- **Web Scraping**: The web scraper, built using Puppeteer, extracts data from the first 500 items on the Sreality for-sale apartments page. It retrieves the title and image URL for each item.
- **Backend API**: The backend server, powered by Node.js and Express.js, serves the scraped data to the frontend. It provides a RESTful API endpoint for accessing the collected information.
- **Frontend Web Application**: The frontend is a Next.js React application developed in TypeScript. It presents the scraped data in a user-friendly format, allowing users to view the titles and images of the apartments.
## Getting Started

Follow these steps to get the project up and running on your local machine using Docker:

1. **Clone the Repository**:

   ```bash
      git clone https://github.com/your-username/sreality-2.0.git
      cd sreality-2.0
   ```
2. **Build Docker Images:**
- Build the backend image:
  ```bash
    cd backend
    docker build -t sreality-backend .
  ```
- Build the scraper image:
   ```bash
      cd scrape
      docker build -t sreality-scrape .
   ```
- Build the frontend image:
   ```bash
      cd frontend
      docker build -t sreality-frontend .
   ```
3. **Run the Application:**
- Go back to the root directory and run Docker Compose:
  ```bash
     cd ..
     docker compose up
  ```
## Access the Application

Once the containers are running, you can access the project in your web browser at [http://localhost:8080](http://localhost:8080).

## Usage

The Sreality 2.0 project is now running locally. You can view the scraped data in your web browser by visiting [http://localhost:8080/properties](http://localhost:8080/properties).

## Notes

- Make sure you have Docker installed on your system before running the project.

## Legal Notice

The content scraped from the target website, [Sreality](https://www.sreality.cz/en/search/for-sale/apartments), is subject to all rights being reserved by the respective website owner. Use of the scraped data is strictly for educational and demonstration purposes..
