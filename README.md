# DevTinder

- created vite + react app
- remove unnecessary code and add create hello world app
- Install the Tailwind css
- Install Daisy UI
- Add Navbar component to App.jsx
- Install React Router DOM
- Create the BrowserRouter -> Body -> Route=/body ->RouteChildren
- Create an Outlet inside the body component
- Create the footer
- Install the Axios
- Install the cors backend => add cors configuration
- whenever you are making an api call so pass axios => {withCredentials:true}
- install redux toolkit https://redux-toolkit.js.org/tutorials/quick-start
- configure store => provider => createslice => add reducer to store
- add redux devtools in chrome
- Login and see if your data is coming properly in the store
- Navbar should update as soon as user logs in
- Refactor our code to add constant file + create a component folder
- You should not able to access other pages without login
- if token is not present it should redirect to login page
- built logout feature
- login error message show if credientials are not valid
- get the feed and add the feed in the store
- build the user card on the feed
- add the edit profile feature also
- New Page - See all my connections
- New Page - See all my conenction Requests
- accept and reject connections
- send ignore the usercard from the feed
- signup form

### Deployment Steps

- to connect to machine use below command
-        ssh -i "devTinder-secret.pem" ubuntu@ec2-13-60-225-67.eu-north-1.compute.amazonaws.com
- below is nvm install commanf
-        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

  location /api {
  proxy_pass http://localhost:7777;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
  proxy_cache_bypass $http_upgrade;
  }

  ### Adding Custom domain name

  - purchased domain from godaddy.com
  - singup on cloudfare & add domain name
  - change the name servers on godaddy and point it to cloudfare
  - wait for sometime until your name servers are updated (took 15 min)
  - DNS record : devtinder.co.in
  - Enable SSL Full (home work)
  - copy command "sudo scp -r dist/\* /var/www/html"
