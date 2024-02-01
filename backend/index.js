const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/squadmanagement', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define Squad model
const Squad = mongoose.model('Squad', {
    name: {
        type: String,
        required: true,
    },
    description: String,
    leader: {
        type: String,
        required: true,
    },
    members: [{
        name: String,
        position: String,
        skills: [String],
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Use bodyParser for JSON parsing
app.use(bodyParser.json());

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the squad management application!');
});

// Route to get a list of squads in HTML format
app.get('/squads', async (req, res) => {
  try {
      const squads = await Squad.find();

      // Build an HTML page with detailed squad information and IDs
      const html = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Squad Listing</title>
          </head>
          <body>
              <h1>Squad Listing</h1>
              <ul>
                  ${squads.map(squad => `
                      <li>
                          <strong>ID:</strong> ${squad._id}<br>
                          <strong>Squad Name:</strong> ${squad.name}<br>
                          <strong>Description:</strong> ${squad.description}<br>
                          <strong>Leader:</strong> ${squad.leader}<br>
                          <strong>Members:</strong>
                          <ul>
                              ${squad.members.map(member => `
                                  <li>
                                      <strong>Name:</strong> ${member.name}<br>
                                      <strong>Position:</strong> ${member.position}<br>
                                      <strong>Skills:</strong> ${member.skills.join(', ')}<br>
                                  </li>
                              `).join('')}
                          </ul>
                      </li>
                  `).join('')}
              </ul>
          </body>
          </html>
      `;

      res.send(html);
  } catch (error) {
      res.status(500).send('Error fetching squads');
  }
});

// Route to create a new squad
app.post('/squads', async (req, res) => {
    const { name, description, leader, members } = req.body;

    try {
        const newSquad = new Squad({ name, description, leader, members });
        await newSquad.save();
        res.status(201).json(newSquad);
    } catch (error) {
        res.status(500).json({ error: 'Error creating squad' });
    }
});

// Route to update an existing squad
app.put('/squads/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, leader, members } = req.body;

    try {
        const updatedSquad = await Squad.findByIdAndUpdate(
            id,
            { name, description, leader, members },
            { new: true }
        );

        res.json(updatedSquad);
    } catch (error) {
        res.status(500).json({ error: 'Error updating squad' });
    }
});

// Route to delete a squad
app.delete('/squads/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Squad.findByIdAndDelete(id);
        res.json({ message: 'Squad deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting squad' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
