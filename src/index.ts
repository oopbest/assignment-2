import express, { Request, Response } from 'express';
import axios from 'axios';
import { transformData } from './utils/transformData';
import { User } from './types';

const app = express();
const PORT = 3000;

/**
 * Fetches user data from the API and groups it by department.
 */
app.get('/users-by-department', async (req: Request, res: Response) => {
    try {
        // Fetch data from the API
        const response = await axios.get<{ users: User[] }>('https://dummyjson.com/users');
        const users = response.data.users;

        // Transform the data
        const groupedUsers = transformData(users);

        // Send the transformed data as the response
        res.json(groupedUsers);
    } catch (error) {
        console.error('Error fetching or transforming data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});