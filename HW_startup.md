# Unit 17 Nosql Homework: Workout Tracker.
# Homework Startup

## Steps:

Create your server.js file.

Install packages ( npm install ).

Add code to your Server.js file to do the following:
- import npm packages.
- use express Middleware ( urlEncoded, json and static ).
- create PORT and assign to a variable.
- connect to Mongo Db.
- import your routes (API and HTML Routes).
- create code to start the server and listen to requests.


Create Model folder and add Model file (Workout.js)
- include the following properties to the Workout Model:
    - day (type -> Date)
    - exercises (type -> Array)

- Inside the "exercises" property Array, you will store each of the exercises for that workout as objects.
- Each object inside the "exercises" property will have the following properties:
    - type (type -> String)
    - name (type -> String)
    - duration (type -> Number)
    - weight (type -> Number)
    - reps (type -> Number)
    - sets (type -> Number)
    - distance (type -> Number)
- Create an index.js file and import the Workout model.


Create a Routes folder and create two files:
-   htmlRoutes.js:
    - Create all the routes to display pages (View)
    - You will need html routes to display the following pages:
        - index.html ( "/" )
        - exercise.html ( "/exercise" )
        - stats.html ( "/stats" )

-   apiRoutes.js:
    - Create all the routes to listen to the requests from the front end.
    - You will need at least Four (4) api routes:
        - GET ( "/api/workouts" ) - Get all workouts
            - You will also need to figure out how to calculate the total duration from all exercises inside the exercises Array.
        - GET ( "/api/workouts/range" ) - Get the first 7 Workouts from the Workout table to be used in the "stats" page.
        - POST ( "/api/workouts" ) - Create a new Workout
        - PUT ( "/api/workouts/:id" ) - Update a Workout

Seed your Database using the seed file inside the seeder folder by just runing on your terminal:
-   npm run seed


## Check list
```
✓ Application uses MongoDB for its database.

✓ Application uses mongoose to create its schemas.

✓ Application uses express to handle routes.

✓ Application allows user to see the last workout routine.

✓ Application allows users to create new workout routines.

✓ Application allows users to add exercises to a previous workout routine.

✓ Application allows users to see workout stats (charts).

```

## Submission on BCS

You are required to submit the following:

* The URL to the deployed application (Heroku)

* The URL to the Github repository
