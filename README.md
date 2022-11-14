<div align="center" id="readme-top">
  <img src="https://user-images.githubusercontent.com/57516503/201501267-7a8ca85e-eb46-44ed-bfce-49defcbf2884.png" alt="Logo" width="50%">

  
  <p align="center">
    The <b>Soundwave API</b> will provide you with many songs, artists and genres included in the top lists over the years.
    <br />
    </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
  <li>
    <a href="#about-the-project">About the project</a>
    </li>
    <li>
    <a href="#built-with">Built With</a>
    </li>
    <li><a href="#meet-the-team">Meet the team</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a>
       <ul>
          <li><a href="#steps">Steps</a></li>
          <li><a href="#testing">Testing</a></li>
       </ul>
    </li>
  </ol>
</details>


## About the project
An API where you can see the list of top songs from different eras. An unregistered user can view the initial preloaded songs tops. A registered user has the option to create their own music tops. All users can view filtered lists of songs by genre, artist and year.

## Built with
* [![JavaScript][JavaScript.js]][JavaScript-url]
* [![Nodejs][Nodejs.js]][Nodejs-url]
* [![Express][Express.js]][Express-url]
* [![Sequelize][Sequelize.js]][Sequelize-url]
* [![Postgresql][Postgresql.js]][Postgresql-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

##  Meet the team
- [Alma Lovera](https://github.com/almalst)
- [Francisco Solís](https://github.com/francisco-solis99)
- [Marcela Contreras](https://github.com/proxyz100/)
- [Maribel Melendez](https://github.com/marmelendez)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting started
### Prerequisites
Make sure you have Nodejs, NPM and MySQL installed in your local device.
> [Install Nodejs and NPM](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac)   
> [Getting started with MySQL](https://dev.mysql.com/doc/mysql-getting-started/en/)

### Installation (local)
1. Clone the repo `git clone https://github.com/francisco-solis99/soundwave`
2. Move to directory `cd soundwave`
3. Install npm packages `npm i`
4. Open MySQL and create a database called soundwave `CREATE DATABASE soundwave`
5. Open the soundwave repo folder (we recommend using VScode) and create a **.env** file. Add the data with the .env-example variables from your sql server.
7. After creating the env file don't forget to install the package `npm i dotenv`
6. Enter the command `npm run migrations:run` in the terminal to run migrations and create the tables. 
7. Then run the command `npm run seeders:run` to insert initial data into the tables.
8. Run the app `npm run dev`

> Check this [tutorial](https://youtu.be/0xsLNWVsxHs) to run the app in your local machine!
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage
### Steps
We have three types of users and each of them has different permissions:

| UserType | Description | Have access to |
| ---------| ------------| ---------------|
| Basic      | Not registered users | get artists, log in, sign up, get genres, search, get songs, get top songs, get top |
| 2- Premium | When user sign up    | Same as Basic user, create, update and delete artists, songs, genres and top|
| 1 - Admin  | Admin user           | All endpoints |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

1. First you have to sign up
```
{
	"name": "Katniss",
	"surname": "Everdeen",
	"nickName": "kateve12",
	"email": "katniss@hotmail.com",
	"password": "notadummypassword",
	"typeUserId": 1
}
```

2. Then log in with the email and password
```
{
	"email": "katniss@hotmail.com",
	"password": "notadummypassword"
}
```

3. You'll get a token, with this token you will have access to the endpoints corresponding to that user type.
4. And that's it! Start testing all the methods the user has access to 🥳


⚠️  **Considerations**
- You can only have a maximum of 2 user types (1-Admin, 2-Premium).
- You need to get a valid token to access some methods, otherwise you will get a _401 Unauthorized_ error.
- If you are a Admin / Premium User (registered): 
  - Before creating a new Song, make sure that the Genre and Artist linked to the song are already registered, if not you can add them.
  - Before creating a new Top-Song, make sure that the Top and the Songs you are going to add are already registered, if not add them first.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Testing
There are already some users in the database that you can use for testing but don't forget that you can still sign up and create a new one!

**Users**

|email|password|typeuserId|
|-----|--------|----------|
|marcon@hotmail.com|SVNJn994M$|1|
|frasol@hotmail.com|57PEGdR#9@|2|

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<div align="center">
 <h3 align="center">Thanks for visiting! :notes:</h3>
</div>

[JavaScript.js]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://www.javascript.com/
[Nodejs.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Nodejs-url]: https://nodejs.org/en/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[Sequelize.js]: https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue
[Sequelize-url]: https://sequelize.org/
[Postgresql.js]: https://img.shields.io/badge/MySQL-316192?style=for-the-badge&logo=mysql&logoColor=white
[Postgresql-url]: https://www.mysql.com/
