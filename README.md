

# SF Bathroom Share App 


## Phase 4 Ruby on Rails Project 

The backend is built with Ruby on Rails, and the front-end is built using a standard React framework.


## Description

This is a limited functionality MVP application that allows registered users to add bathroom information in the city of San Francisco. Users also have the ability to add reviews of the bathrooms. 


## How to Start: 

From the application file directory, you can run the follow command: 
 

rails s , to start the Rails server &&
npm -start --prefix client , to star the front-end client 


### Front-end Component Structure & Hierarcy: 

App.js 
  _
    NavBar.js
  _
    Home.js 
      _
        NewBathroomForm.js
  _
    AllBathrooms.js
      _
        ToiletCard.js
          _
            ReviewCard.js
              _
                EditReview.js
          _
            ReviewForm.js
  _
    Log-in.js
  _
    SignUp.js


## General Application Features: 

The main page prompts users to log-in or sign-up for to use the application. 

Upon successful sign-in to the application, the Home page welcomes the user and displays a link to see all the user-submitted bathrooms for perusal, and a form to submit a new bathroom. 

At application load time, the app calls the API for an array of objects that include the bathroom and review information. 

At Sign-up or Log-in, an API call is made to create the user and or log-in the user. 

**Note: All CRUD actions on the application are sent to the server and state is locally updated. All CRUD actions return the entire bathroom object, even when a bathroom's review is updated. This was designed and implemented in this manner for overall state update hygiene.  

Reviews may only be updated or deleted by the User who created the review. Validation for this happens on BOTH the client and server side. 


## Three models: 

User 
Bathroom 
Review 

Attributes can be found in the Schema file 


## User Sign-up and Password Management: 

User sign-up and password hashing is managed via the Ruby gem 'bcrypt', which can be found in the Gemfile. 

User model uses `has_secure_password` for authentication 


