import { Router } from 'express';
const router = Router();

router.get('/', async (req, res) => {
    res.json({
        message: "Welcome to Leetcode API",
        routes: {
            contestRating: "/contestRating/:username for user contest data",
            noSolvedQuestions: "/noSolvedQuestions/:username for user's solved question details",
            badges: "/badges/:username for getting badges of user"
        }
    });
});

export default router;
