require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const noteRoutes = require('./routes/note.routes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Root route
app.get('/', (req, res) => {
    res.send('Notes Upload API is running');
});

// Notes routes
app.use('/api/notes', noteRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});