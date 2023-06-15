# tech-blog
Tech Blog - Challenge #14

## Task
- AS A developer who writes about tech I WANT a CMS-style blog site SO THAT I can publish articles, blog posts, and my thoughts and opinions
- GIVEN a CMS-style blog site WHEN I visit the site for the first time THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option THEN I am taken to the homepage
- WHEN I click on any other links in the navigation THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up THEN I am prompted to create a username and password
- WHEN I click on the sign-up button THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in THEN I am prompted to enter my username and password
- WHEN I am signed in to the site THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- WHEN I enter a comment and click on the submit button while signed in THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- WHEN I click on one of my existing posts in the dashboard THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## Process
- Create a database using mysql schema
- Configure a connection with JAWSDB and sequelize
- Build a server using express, session, handlebars 
- Create the routing network using express router, including the API routes
- Set up the front-end using the handlebars view engine, import data from javascript files
- Seed data using built json files
- Have a public file that will correspond with the appropraite front-end components
- Build the models utilizing the sequelize objexts, that will correspond to given SQL tables
- Write javascript that will call the routes previously built when certain functions / buttons are run or clicked

## What I Learned
- I solidified my knowledge in sequelize and how to properly incorporate a databse to make a full-stack application
- I learned more about deploying to heroku using JAWSD to access database
- I learned a lot about how handlebars functions, and what is possible on the frontend using this engine
- I was able to up my skills of router building, and constructing an efficient and clear API

## Usage
### Please view deployment on heroku: https://tech-blog-86-1d47c4a087ed.herokuapp.com/

### Hompage w/ all blog posts
![Screenshot 2023-06-15 at 1 28 19 PM](https://github.com/bigcat86/tech-blog/assets/122062578/201cccaa-42c7-421d-8cad-7a364ddc299e)

### Login using username and password, or signup with them (create new user)
![Screenshot 2023-06-15 at 1 29 47 PM](https://github.com/bigcat86/tech-blog/assets/122062578/74df5978-b9cd-477d-964e-5deaa5ea5543)

### Create, Update (coming soon), Delete posts on your very own dashboard
![Screenshot 2023-06-15 at 1 30 36 PM](https://github.com/bigcat86/tech-blog/assets/122062578/8455fea7-6487-4be1-bbba-9393ef4ca8b2)

![Screenshot 2023-06-15 at 1 31 01 PM](https://github.com/bigcat86/tech-blog/assets/122062578/e98c5fda-3338-43a7-8304-1c1b7f3a9dd7)

### View comments
![Screenshot 2023-06-15 at 1 31 41 PM](https://github.com/bigcat86/tech-blog/assets/122062578/4164fe6d-6ebe-40f4-bec6-8186b8bf8a52)



