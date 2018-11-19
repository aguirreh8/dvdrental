# DVDRental

This application works with a PostgreSQL database. It is ment to recreate a DVD rental service.

## Getting Started

Install all depedencies using the following:

```
npm install
```

As of right now, there is only local database connection defined. In order to use this application, please install PostgreSQL.
You can find the [Download Page here](https://www.postgresql.org/download/).

## Installing Database

You will need PostgreSQL on your system for this application to work.
A backup of the database can be found on **./db**. Run the backup tool to install.

Connection to the database can be configured in **./connectons/connection.js**.
Change the strings in the following code to match your local configurations:

```
const username = "your username";
const password = "your password";
const server = "your server name";
const port = "your port";
const database = "your database 'dvdrental'";
```