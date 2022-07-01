# Victoria Trac's App of Apps

**A project showcasing my ability to:**
- create a functional user interface
- integrate an API using axios
- utilize React + Redux for state management
- create a form 
- ? authorization ?

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


## Known bugs
[ ] Weather: Vercel's environment variables do not correctly deploy. Can't get access to weather app API.
[X] Tasklist: new items are created with the same ID due to Date.now() running only once. Causes new items to be treated as one.
