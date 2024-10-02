import { Router } from 'express';
import { noSolvedQuestions } from '../controllers/noSolvedQuestions.js';
import userModel from '../Models/userModel.js';

const router = Router();

router.get('/:username', async (req, res) => {
  const { username } = req.params;
    
    try {
        let user = await userModel.findOne({ username });

        if (user) {
            if (user.problemsStats && user.problemsStats.length!=0) {
                return res.json(user.problemsStats);
            } else {
                const userProbelmsSolved = await noSolvedQuestions(username);
                user.problemsStats = userProbelmsSolved;
                await user.save();
                return res.json(user.problemsStats);
            }
        } else {
            const userContestRanking = await contestController(username);
            const newUser = new userModel({
                username,
                problemsStats: userProbelmsSolved,
            });
            await newUser.save();
            return res.json(newUser.problemsStats);
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
