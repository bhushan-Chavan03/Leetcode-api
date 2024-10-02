import axios from "axios";

export const noSolvedQuestions = async (username) => {
  let data = JSON.stringify({
    query: `query userProfileUserQuestionProgressV2($userSlug: String!) {
      userProfileUserQuestionProgressV2(userSlug: $userSlug) {
        numAcceptedQuestions {
          count
          difficulty
        }
        numFailedQuestions {
          count
          difficulty
        }
        numUntouchedQuestions {
          count
          difficulty
        }
        userSessionBeatsPercentage {
          difficulty
          percentage
        }
      }
    }`,
    variables: { userSlug: username }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://leetcode.com/graphql/',
    headers: {
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      // If authentication is required, add a valid token here:
      'authorization': '',  // Add token if needed
      'content-type': 'application/json',
      'referer': 'https://leetcode.com/u/bhushanc2003/',
      'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
    },
    data: data
  };

  try {
    const response = await axios.request(config);
    return response.data.data.userProfileUserQuestionProgressV2.numAcceptedQuestions;
  } catch (error) {
    console.error(error);
  }
};
