#!/bin/bash

# Create squads
curl -X POST -H "Content-Type: application/json" -d '{
  "name": "Red Bull Racing",
  "description": "Formula 1 racing team",
  "leader": "Christian Horner",
  "members": [
    {"name": "Max Verstappen", "position": "Driver", "skills": ["Speed", "Precision"]},
    {"name": "Sergio Perez", "position": "Driver", "skills": ["Consistency", "Overtaking"]}
  ]
}' http://localhost:3000/squads

curl -X POST -H "Content-Type: application/json" -d '{
  "name": "Olympian Heroes",
  "description": "Heroes from Percy Jackson series",
  "leader": "Percy Jackson",
  "members": [
    {"name": "Annabeth Chase", "position": "Strategist", "skills": ["Wisdom", "Combat"]},
    {"name": "Jason Grace", "position": "Flyer", "skills": ["Controlled Flight", "Weather Manipulation"]}
  ]
}' http://localhost:3000/squads

curl -X POST -H "Content-Type: application/json" -d '{
  "name": "Fellowship of the Ring",
  "description": "From The Lord of the Rings",
  "leader": "Aragorn",
  "members": [
    {"name": "Frodo Baggins", "position": "Ring-bearer", "skills": ["Ring Resilience", "Stealth"]},
    {"name": "Gandalf", "position": "Wizard", "skills": ["Magic", "Wisdom"]}
  ]
}' http://localhost:3000/squads

curl -X POST -H "Content-Type: application/json" -d '{
  "name": "Team 7",
  "description": "Naruto's ninja team",
  "leader": "Naruto Uzumaki",
  "members": [
    {"name": "Sasuke Uchiha", "position": "Avenger", "skills": ["Sharingan", "Fire Style Jutsu"]},
    {"name": "Sakura Haruno", "position": "Medic", "skills": ["Healing Jutsu", "Super Strength"]}
  ]
}' http://localhost:3000/squads

# List all squads
curl http://localhost:3000/squads
