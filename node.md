# Deployment Notes

Web servers run web applications
- accept requests from clients
- send back responses to clients

Web servers are a software running on someone's machine

[clients] === [web server(multiple web applications/apis)]

Dev process:
- write code
- commit and push
- profit (it's deployed automatically to heroku)

Steps to prepare our API for dployment to Heroku
- make the dynamic port
- setup a "start" script that uses 'node' (not 'nodemon') to run the server

The environment is the platform (place/os/machine) where the application is running.