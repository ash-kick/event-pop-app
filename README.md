# ![EventPop Logo](assets/event-pop-icon-small.png) EventPop App

Welcome to the EventPop App 💗! This app is intended to help find fun things for you to do in your area tailored to your preferences! Sharing features allow you to include your friends and/or family in your plans for maximum group enjoyment!

![EventPop Logo](assets/event-pop-logo.png)

### App Features:

-    🔎 Finds and notifies users events based on their preferences.
-    ✅ Allows users to set event and location preferences.
-    👯 Allows users to share events with other users.

### App Layout Diagram:

![EventPop Diagram](assets/event-pop-app-diagram.png)

### App Data Structure Diagram:

![EventPop Data Diagram](assets/event-pop-app-data-structure.png)

### App Landing Page:

![EventPop Landing Page Screenshot](assets/event-pop-app-landing-screenshot.png)

# Springboard Capstone Project Requirements & Details

Below are required items for the capstone project for springboard bootcamp. For more formal app details see above context.

## Capstone project details & proposal

Questions from bootcamp project -- Going with idea 3: event recommendation app (EventPop)

1. What tech stack will you use for your final project?

-    React: For building the web application, ensuring a consistent and interactive
     user experience across platforms.

2. Is the front-end UI or the back-end going to be the focus of your project? Or are
   you going to make an evenly focused full-stack application?

     - Front end focus.

3. Will this be a website? A mobile app? Something else?

-    Website.

4. What goal will your project be designed to achieve?

-    It will be designed to be an app that people can use to help find and plan fun events/activities with friends.

5. What kind of users will visit your app? In other words, what is the demographic of
   your users?

-    Anyone looking to find events in their area or an area of interest.

6. What data do you plan on using? How are you planning on collecting your data?
   You may have not picked your actual API yet, which is fine, just outline what kind
   of data you would like it to contain. You are welcome to create your own API and
   populate it with data.

-    I plan to use data from ticket master's API for events data.

7. What does your database schema look like?

-    Note that we have not learned about backend/data structures yet so this is a work in progress.
-    ![Table Sets Diagram for EventPop]()

8. What kinds of issues might you run into with your API? This is especially important
   if you are creating your own API, web scraping produces notoriously messy data.

     - Potentially there could be issues accessing the API since I have not used a public API like this before.

9. Is there any sensitive information you need to secure?

-    Yes, user information will need to be secured. Including, but not limited to, passwords and emails.

10. What functionality will your app include?

-    Overarching idea: Keep you up to date on events in your area so you can plan fun outings and activities.
-    Some features/functionality:
     -    allows users to set event and location preferences
     -    finds and recommends events for users on a set cadence
     -    allows users to share events with friends/invite them
     -    creates a calendar with events you save/RSVP to

11. What will the user flow look like?

-    Homepage: Displays home page for user with links to various content pages.
-    Content pages:
     -    Preference page: Users can set up their event notification/filter preferences.
     -    Upcoming events page: Users can see upcoming events based on their set notification preferences and mark events as attending/share them with others.
     -    Calendar page: Users can see events they have marked as attending in a calendar format.
     -    Search/Filter page: Users can search for specific topics and filter content by category and create adhoc filtering.

12. What features make your site more than a CRUD app?

-    The API integration and automated real time event finding aspect make this more than a CRUD app. As well as multiple views the user can interact with.

13. What are your stretch goals?

-    Data Sources: Add more than just ticket master to the source data for a more robust set of events.
-    Notifications: Add notifications for users like when tickets for an event go on sale and prices dip to a certain amount.
-    Interactive features: For the future, event feed with friends in it/more cross user connection features.
-    Integrations:
     -    Transportation applications like Uber/Lyft/Waymo for the planning aspects.
     -    Instagram for posting your event/event plans to share with friends.

## Capstone project ideas 💭

### (1) travel planning app

-    upload travel details including but not limited to:
     -    dates
     -    flights
     -    train tickets
     -    activites
     -    restaurants
-    add people to trips to share itineraries
-    set up notifications to remind yourself about upcoming itinerary or planning action items
-    AI helper to suggest activities around the area of other events in the itinerary

### (2) recipe/meal planning app

-    upload family recipes (or any recipes) from pdfs/hand written recipes
-    shopping list builder
-    create recipe books to store and categorize recipes
-    base list of recipes from recipe API available
-    share "recipe books" with friends/family

### (3) event recommendation app

-    allows users to set event and location preferences
-    finds and recommends events for users on a set cadence
-    allows users to share events with friends/invite them
-    creates a calendar with events you save/RSVP to
