import axios from 'axios';

export const contestController = async (username) => {
    const graphqlQuery = {
        query: `
            query userContestRankingInfo($username: String!) {
                userContestRanking(username: $username) {
                    attendedContestsCount
                    rating
                    globalRanking
                    totalParticipants
                    topPercentage
                    badge {
                        name
                    }
                }
                userContestRankingHistory(username: $username) {
                    attended
                    trendDirection
                    problemsSolved
                    totalProblems
                    finishTimeInSeconds
                    rating
                    ranking
                    contest {
                        title
                        startTime
                    }
                }
            }
        `,
        variables: {
            username: username,
        },
        operationName: "userContestRankingInfo",
    };

    try {
        const response = await axios.post(
            'https://leetcode.com/graphql/',
            graphqlQuery,
            {
                headers: {
                    'accept': '*/*',
                    'accept-language': 'en-US,en;q=0.9',
                    'content-type': 'application/json',
                    'cookie': 'csrftoken=rstrSlqbsJyjUoO8HgdKpFyjLZ7uwqaG8m2FW3LypES1h4HAAPBod1Q4X6gZqgvg; gr_user_id=edf8b512-af6b-4de0-b74a-df0bad867550; __stripe_mid=d2f4d8e0-3589-412f-9608-02be211d28b9a0e0de;',
                    'origin': 'https://leetcode.com',
                    'referer': `https://leetcode.com/u/${username}/`,
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
                    'x-csrftoken': 'rstrSlqbsJyjUoO8HgdKpFyjLZ7uwqaG8m2FW3LypES1h4HAAPBod1Q4X6gZqgvg',
                    'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        );

        return response.data.data.userContestRanking;
    } catch (error) {
        console.error('Error fetching contest ranking:', error);
        throw error;
    }
};
