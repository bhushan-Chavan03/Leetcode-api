import { Router } from 'express';
import { getBadges } from '../controllers/badges.js';

const router = Router();

router.get('/:username', async (req, res) => {
    const { username } = req.params;
    console.log(username);
        const userContestRanking =await getBadges(username);
        console.log(userContestRanking);
        res.json(userContestRanking);
});

export default router;
