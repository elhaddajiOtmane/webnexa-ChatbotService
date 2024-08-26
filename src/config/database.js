const { DATABASE_URI } = require('./config/database');

// ... rest of app.js code ...

mongoose.connect(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));