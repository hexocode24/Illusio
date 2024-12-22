# MACR Image Generator

A modern text-to-image generator built with Vite, React, and Hugging Face's Stable Diffusion model.

## Features

- Clean and modern UI
- Real-time image generation
- Powered by Stable Diffusion 2.0
- Loading states and error handling
- Responsive design

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Get your Hugging Face API key:
   - Go to [Hugging Face](https://huggingface.co/)
   - Create an account or sign in
   - Go to your profile settings
   - Generate an access token
   
4. Create a `.env` file in the root directory and add your API key:
   ```
   VITE_HUGGINGFACE_API_KEY=your-api-key-here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Enter a descriptive prompt in the text input
2. Click "Generate" to create your image
3. Wait for the image to be generated
4. The generated image will appear below the input field

## Technologies Used

- Vite
- React
- TypeScript
- Hugging Face Inference API
- Stable Diffusion 2.0
- React Loader Spinner

## License

MIT
