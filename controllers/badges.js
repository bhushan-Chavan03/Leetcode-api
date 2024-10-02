import axios from "axios";

export const getBadges = async (username) => {
  let data = JSON.stringify({
    query: `query userBadges($username: String!) {
      matchedUser(username: $username) {
        badges {
          id
          name
          shortName
          displayName
          icon
          hoverText
          medal {
            slug
            config {
              iconGif
              iconGifBackground
            }
          }
          creationDate
          category
        }
        upcomingBadges {
          name
          icon
          progress
        }
      }
    }`,
    variables: { username }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://leetcode.com/graphql/',
    headers: {
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'origin': 'https://leetcode.com',
      'referer': `https://leetcode.com/u/${username}/`,
      'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
    },
    data: data
  };

  try {
    const response = await axios.request(config);
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
};
