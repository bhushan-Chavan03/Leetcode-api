import mongoose from 'mongoose';

const problemStatsSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
        enum: ['EASY', 'MEDIUM', 'HARD'], 
    }
});

const contestStatsSchema = new mongoose.Schema({
    attendedContestsCount: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    globalRanking: {
        type: Number,
        required: true,
    },
    totalParticipants: {
        type: Number,
        required: true,
    },
    topPercentage: {
        type: Number,
        required: true,
    },
    badge: {
        type: String,
        default: null,
    }
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    contestStats: {
        type: contestStatsSchema,
        required: true,
    },
    problemsStats: {
        type: [problemStatsSchema], 
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

export default User;
