# AuroraRift Project

## Environment Setup

This project uses OpenAI's GPT-4 for various AI features. To set this up, you need to configure the following environment variable:

- `OPENAI_API_KEY`: Your OpenAI API key

### How to get your OpenAI API Key

1. Go to https://platform.openai.com/
2. Sign up or log in to your OpenAI account
3. Navigate to the API section
4. Create a new API key
5. Copy the API key - this is your OPENAI_API_KEY

### Setting up in Vercel

1. Go to your Vercel project dashboard
2. Click on "Settings" at the top
3. In the left sidebar, click on "Environment Variables"
4. Add a new variable with the key `OPENAI_API_KEY` and paste your API key as the value
5. Save and redeploy your project

### Setting up locally

If you're running the project locally, create a `.env.local` file in the root directory of your project and add the following line:

\`\`\`
OPENAI_API_KEY=your_openai_api_key_here
\`\`\`

Replace `your_openai_api_key_here` with your actual OpenAI API key.

## Important Considerations

1. Keep your API key secure and do not share it publicly.
2. Be aware of the API usage and associated costs.
3. Ensure compliance with OpenAI's use case policies.

## Running Locally

To run this project locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env.local` file in the root directory and add your OPENAI_API_KEY:

