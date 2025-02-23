# Simple Blog Application

## Overview

This is a simple blog application built as part of a job competition technical assignment for the Full-stack Developer position. The application allows users to register, log in, create blog posts, and view a list of posts.

## Features:

* User Authentication: User registration and login system.
* Blog Posts: Create, view, edit, and delete posts.
* Database: Relational database using SQLite.
* Validation: Input validation for registration, login, and post creation.
* Security: Password hashing and SQL injection prevention.
* Styling: Tailwind CSS for a clean and presentable design.

## Prerequisites

To run this application, ensure you have the following installed:

* PHP 8.0+
  Make sure in your php.ini file are enabled(commented out):
  extension=sqlite3
  extension=pdo_sqlite
* Composer
* Node.js (v14+ recommended)
* SQLite

## Installation

## 1. Clone the Repository
```bash
git clone https://github.com/MartinHolts/trial-simple-blog-laravel-react
cd trial-simple-blog-laravel-react
```

## 2. Install Dependencies
Run the following command to install PHP dependencies:
```bash
composer install
```
Then, install JavaScript dependencies:
```bash
npm install
```

## 3. Run the Development Server

Start the frontend and backend server:
```bash
composer run dev
```

Start the backend server:
```bash
php artisan serve
```

Start the frontend development server:
```bash
npm run dev
```

Visit the application at http://localhost:8000.
