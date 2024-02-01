# Squad Management App

A Node.js application for squad management within a company, persisting data in MongoDB.

## Project Setup

Ensure you have Docker installed before proceeding.

## Cloning the Repository

```
git clone https://github.com/your-username/squad-management.git
cd squad-management
```

## Starting the Application

To start the application, use the following command:
```
docker-compose up --build
```
Access the application at http://localhost:3000.


### View Squads in HTML

Open your web browser and go to http://localhost:3000/squads to view the squads in HTML format.

## API Routes

### List Squads
```
curl http://localhost:3000/squads
```
### Create Squad
```
curl -X POST -H "Content-Type: application/json" -d '{"name": "SquadName", "description": "Squad Description", "leader": "SquadLeader", "members": [{"name": "Member1", "position": "Position1", "skills": ["Skill1", "Skill2"]}]}' http://localhost:3000/squads

```
### Update Squad
```
curl -X PUT -H "Content-Type: application/json" -d '{"name": "NewName", "description": "New description", "leader": "New leader", "members": [{"name": "NewMember", "position": "NewPosition", "skills": ["NewSkill1", "NewSkill2"]}]}' http://localhost:3000/squads/:id

```

### Delete Squad

```
curl -X DELETE http://localhost:3000/squads/:id
```

## Additional Testing
Generate the squads automaticaly via bash
```
bash create_squads.sh
```
