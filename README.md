<h1 align="center"> Career Explore: Government Jobs </h1>  

#### Turing School of Software & Design Mod 3 Showcase Solo Project
---

## Table of Contents
* [Introduction and Goals](#introduction)
* [Deploy](#deploy)
* [Features](#features)
* [Technologies](#technologies)
* [Author](#author)

## Introduction
The primary goal of this project was to build a unique React application utilizing the technologies learned throughout Module 3, specifically demonstrating mastery in React, React Router, asynchronous JavaScript, end to end testing with Cypress, and more. From generating the initial idea, mapping out user personas to show how this application would target a niche audience, to testing and development, this solo project had a quick five day turnaround time.

Career Explore utilizes the USAJobs API that provides data related to all federal government jobs currently posted for job applicants. Career Explore is a multi-page informational jobs application that targets users who have an interest in browsing government jobs by job title, but only want to learn about what someone in that role would do (major duties) for those positions.

USAJobs.gov showcases hundreds and thousands, if not more, government jobs on their job board, and a wealth of detail of each position as required by law. This can be difficult to navigate, especially for a user only looking to browse and gather high-level information about job duties as they are narrowing down options in their government career exploration. Utilizing the USAJobs API on this application allows the exploratory user to quickly skim positions and their respective position duties as they seek to explore career paths that may best fit with their personal and career interests. The user of this app may be asking the question, “What would a day in the life of/job duties be of a government job with “XYZ” position title?”.

The specifications for this project can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html).

---

## Deploy
[View deployed application here!](https://careerexplore-deploy.herokuapp.com/)

## Goals
* In a solo capacity, build a unique React application with a quick, five-day turnaround time
* Use USAJobs API to receive current job postings and data for all federal government jobs
* Use TDD - Cypress
* Easy to navigate UI/UX  

---
## Features

#### Home Page, Details Page
On load, the user sees prompts and a search bar where they can search for any government job title. Upon search, they can see the top 25 most recently posted government jobs that match what was inputted in the search bar. User can then click on any job posting to be taken to a details page showcasing what the major job duties will be in that role.

Upon viewing the details pages and seeing the position's major responsibilities, position title, and government organization hiring for that position, user will also be able to view the position's application (in linked URL) and be able to favorite the job posting for later view.

#### Favorites Page
When a user clicks the "Add to Favorites" button for a particular job posting, the posting is saved to the Favorites page and able to be viewed again upon refresh utilizing local storage. User can then click the "Remove from Favorites" button to remove that item from the Favorites section.

![View_Career_Explore](https://user-images.githubusercontent.com/78229679/135014242-6719fead-8367-42e0-9cb4-5d6c5b48dcf9.gif)

---

#### Future Additions
- Add a login page for multiple users to store favorite positions they want to display on login
- Add more responsive styling
- Add in additional data to details page for a more robust learning experience for user


---

## Technologies
React, React Router, Asynchronous Javascript, Cypress, JSON, HTML5, CSS

--- 
## Author
<table display: inline;>
     <tr>
       <td> Natalie McIntyre <a href="https://github.com/nataliemcintyre2021">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/78229679?v=4" alt="Natalie McIntyre GitHub Picture"
 width="150" height="auto" /></td>
</table>  

**************************************************************************
###### This project was created for [Turing School of Software and Design](https://turing.edu/)
###### September 27th, 2021
**[Back to top](#table-of-contents)**
