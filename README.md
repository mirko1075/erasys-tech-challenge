# Tech challenge Erases



## Tech stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).	

"react": "^17.0.2",

"react-dom": "^17.0.2",

"react-scripts": "^4.0.3",

"typescript"': "^4.1.2"

### Challenges

Problem: Requests blocked by C.O.R.S policy.
Fix: Adding react router "http://localhost:3000" in proxy property in package.json

Problem: At work I use React Native and  switching was not easy after a day on my main Project.



Choices:

I used React proxy property in package.json to allow communication with local API avoiding CORS policy

I used bootstrap for card and grid

I used a lot of inline styles, beacuse I'm used to that in react native now and it was easier for me.

### `Application `

Application is made of a grid of users profiles.

On each card the followinf informations are shown:

Name

Picture, 

Distance,

Status or status when user is offline

Clicking on each card a Modal is shown, displaying the user complete information:

​    "name"

​    "online_status"

​    "is_plus"

​    "picture": {

​        "comment"

​        "url"

​    },

​    "last_login"

​    "details": {

​        "headline"

​        "location": {

​            "area"

​            "city"

​            "country"

​            "distance"

​            "name"

​        },

​        "personal": {

​            "age"

​            "body_hair"

​            "body_type"

​            "ethnicity"

​            "eye_color"

​            "height"

​            "relationship"

​            "smoker"

​            "weight"

​        },

​        "sexual": {

​            "anal_position"

​            "safer_sex"

​            "sm"

​        },

​        "is_plus"

​    }

