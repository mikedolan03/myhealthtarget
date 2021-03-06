Symptom Hacker
================

Follow this link to try Symptom Hacker: https://blooming-lake-36867.herokuapp.com/

*Try a demo account to see what the app looks like with data:* 

**username:** user999
**password:** password123

Summary
------------------

Symptom Hacker helps users figure out what foods are causing their health problems. Users log food and symptoms into the app and then the app generates an interactive dashboard displaying food and symptom correlations. 

![alt text](https://github.com/mikedolan03/myhealthtarget/blob/master/src/components/shgraph.png "Symptom Hacker Dashboard Graph")

The dashboard of Symptom Hacker displays the top food culprits that might be causing a user symptoms. Other widgets on the page show different statistics based on user input. 

Users can add and update daily logs of foods and symptoms. They can change their dashboard reports by selecting a different symptom or date range to examine. 

![alt text](https://github.com/mikedolan03/myhealthtarget/blob/master/src/components/shdeskdash.png "Symptom Hacker Dashboard Widgets Desktop version")

API
------------
Symptom Hacker interacts with a seperate API built in Node.js using MongoDB. The API allows the React client-side app to send queries requesting the user's food and symptom data. The API also takes user input and stores user data in the database.  

API Repo: https://github.com/mikedolan03/myhealthtargetapi

Technology Used
-----------
* React
* Redux
* Chart.js
* Moment.js
* Enzyme.js 

API
------------
* Node.js
* Express.js
* Mongodb
* Mocha / Chai


