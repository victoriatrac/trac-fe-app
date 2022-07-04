# Victoria Trac's App of Apps

View my current status on my Trello board: https://trello.com/b/6wmxSy8i/app-of-apps-kanban

Deployed version: https://app-of-apps.vercel.app/
** Weather app API key not working through Vercel
** News app is displaying placeholder data so I don't overuse the API

**A project showcasing my ability to:**
- create a functional user interface
- handle API calls and display the data
- implement state management
- modify the DOM and display components with react-router
- create a dynamic form; utilize validation
- deploy an application
- write clean, version-controlled code

## Technologies Used
- JavaScript
- vanilla CSS <3
- React
- React-router
- JSON Server
- Axios
- Yup
- Vercel

## Database Resources Used
Appreciative of the *free* resources that are making this project possible for me to work on:
- OpenWeatherMap: https://openweathermap.org/
- Cat Fact API: https://catfact.ninja/
- JSON Placeholder: https://jsonplaceholder.typicode.com/
- Lorem Picsum: https://picsum.photos/
- NewsData: https://newsdata.io/
- JSON Server: https://github.com/typicode/json-server

## Change Log

**6/10/22**
- set up react app
- created weather component that finds user's location and generates a basic UI of the weather
- set up an axios spread to collect data from two APIs within OpenWeatherMap
- added function to convert celcius to fahrenheit

**6/11/22**
- made first commit to github
- added dotenv file to hide the api key

**6/12/22**
- changed layout of weather tile using flexbox
- added basic gradient backgrounds for tile and app

**6/13/22**
- added new font for weather tile

**6/14/22**
- added custom weather icons for tile
- cleaned up Weather.js, weather.css, App.js, App.css, index.css
- tweaked padding
- added filter to icon to make it white
- made changes to font, minor layout tweaks
- created placeholder components
- uploaded to vercel after fixing package issues
- created new css file for shared attributes
- organized codeblocks in existing files
- created basic task application with form and fake axios calls

**6/15/22**
- tweaked layout of form
- adapted css from other component, renamed identifiers
- further changes to task list layout
- added third placeholder component

**6/17/22**
- added functionality to task list for:
-- toggling completed state for items
-- striking through completed items
-- removing completed items

**6/21/22**
- fixed ID bug in task app

**6/22/22**
- started news app for final tile
- implemented axios call using mock API for now to save limited API calls for news site
- added pagination to news app

**6/23/22**
- removed margins/padding around components

**6/29/22**
- installed react-router-dom
- add div for top menu
- fixed random compiler bugs

**6/30/22**
- implemented browser-router
- moved css to new folder, relinked files
- created navigation component
- implemented NavLink for future nav styling
- added basic navigation styling

**7/1/22**
- on news app, hid image tag for missing image sources
- on news app, changed size of text div depending on image render

**7/3/22**
- minor cleanup
- on task app, added ability to count tasks
- added ability to delete single tasks
- added ability to edit tasks (not fully functional)

**7/4/22**
- disabled submit button on null task input


