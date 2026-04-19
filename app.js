const express = require('express');
const app = express();

app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const pointRoutes = require('./routes/pointRoutes');
const rewardRoutes = require('./routes/rewardsRoutes');

// use
app.use('/api/users', userRoutes);
app.use('/api/points', pointRoutes);
app.use('/api/rewards', rewardRoutes);

// jalankan servernya
app.listen(3000, () => {
  console.log('Server jalan di port 3000');
});