import { Router } from 'express';
import axios from 'axios';
import { contestController } from '../controllers/contestRanking.js';
import userModel from '../Models/userModel.js';

const router = Router();

router.get('/:username', async (req, res) => {
    const { username } = req.params;
    
    try {
        let user = await userModel.findOne({ username });

        if (user) {
            console.log(user.contestStats);
            if (user.contestStats && user.contestStats!=null) {
                return res.json(user.contestStats);
            } else {
                const userContestRanking = await contestController(username);
                console.log(userContestRanking)
                user.contestStats = userContestRanking;
                await user.save();
                return res.json(user.contestStats);
            }
        } else {
            const userContestRanking = await contestController(username);
            const newUser = new userModel({
                username,
                contestStats: userContestRanking,
            });
            await newUser.save();
            return res.json(newUser.contestStats);
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
