## Coder Cafe API

### Frontend Git Url
https://github.com/JLC-group-project/part-b-front-end

### Backend Git Url
https://github.com/JLC-group-project/part-b-backend

### Deployed URL
https://coderscafe.herokuapp.com/

### Retrieving Atlas DB URL
1. Create MongoDB account
2. Create a Cluster
3. Click on QuickStart
4. Create a user, click my local environment
5. Set IP Access to 0.0.0.0/0
6. Create a Collection/Database
7. Click on Connect on the Database Deployments dashboard
8. Follow link to connect MongoAtlas to your application
9. https://www.mongodb.com/docs/atlas/driver-connection/
10. Copy "mongodb+srv://testadmin:<password>@cluster0.rmtgtp9.mongodb.net/<CollectionName>?retryWrites=true&w=majority"
11. Paste in .env file after "ATLAS_DB_URL="

### Running Backend API
npm start

OR 

npm install -g nodemon
nodemon

### Libraries
- "cors": "^2.8.5"
- "dotenv": "^16.0.1"
- "express": "^4.18.1"
- "mongoose": "^6.4.4"
- "pg": "^8.7.3"