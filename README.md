# Homework 3 : Password Generator
* You can take a look at the [project page](https://github.com/ndelaire/password_generator)
* View the [GitHub page](https://ndelaire.github.io/password_generator/)

# Table of Contents
* Project Overview
* JavaScript
* Frameworks
* License
* Contact

# Project Overview 

The purpose of this project was to create an application that can generate a random password based on user input. The application runs in the browser and was asked to feature dynamic HTML and CSS while being powered by JavaScript code. The interface also needed to be responsive to any screen size. 

This password generator is for anyone who has access to sensitive data or wanted more security with their password. 

# JavaScript 

The JavaScript that was used: 
Arrays were created for uppercase letters, lowercase letters, numbers, and special characters. Then the function generate password was used. When the user selects generate password, they are provided with a prompt to choose the length of their password between 8 and 128 characters. 

Then, and if else statement was used after they entered the length of their password. They receive a confirmation of how many character if it is within the character count. If not, they receive and alert that informs then it must be within the character length. If it is within the number range, they move forward, if not, it starts over. 

Provided they are within the range, they are then asked to confirm: 
* Would you like uppercase letters?
* Would you like lowercase letters?
* Would you like numbers?
* Would you like special characters?

They don't need to say "okay" to all of these questions, but need to answer "okay to at least one. I used an if else statement to confirm this and return them to the start if it does not meet the criteria. If the criteria is met, a for loop is used to generate a random combination of the arrays. Once this is done, the password is generated into the box. 

![Password Generator Demo](./assets/passwordgenerator.gif)
# Framework 

JavaScript


