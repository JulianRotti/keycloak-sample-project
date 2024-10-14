import express from 'express';
import AppRoutes from './routes/AppRoutes.js';
import cors from 'cors';  // Import CORS middleware
import { keycloak } from './middleware/authMiddleware.js';

const app = express();

// initialize Keycloak globally
app.use(keycloak.middleware());

// Middleware
app.use(express.json());

// Enable CORS for requests from http://localhost:3000 (React frontend)
app.use(cors({
    origin: 'http://localhost:3000',  // Allow only your frontend
}));

// Routes
app.use('/api', AppRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});