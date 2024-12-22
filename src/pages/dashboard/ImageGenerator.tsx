import { useState } from 'react'
import { HfInference } from '@huggingface/inference'
import { ThreeDots } from 'react-loader-spinner'

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const generateImage = async () => {
    if (!prompt) {
      setError('Please enter a prompt')
      return
    }

    setLoading(true)
    setError('')
    setImage('')

    try {
      const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY)
      const result = await hf.textToImage({
        model: 'stabilityai/stable-diffusion-2',
        inputs: prompt,
      })

      if (result instanceof Blob) {
        const imageUrl = URL.createObjectURL(result)
        setImage(imageUrl)
      }
    } catch (err) {
      setError('Failed to generate image. Please check your API key and try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Image Generator</h2>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              onClick={generateImage}
              disabled={loading}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Generate
            </button>
          </div>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          {loading && (
            <div className="flex justify-center py-8">
              <ThreeDots color="#646cff" height={50} width={50} />
            </div>
          )}

          {image && (
            <div className="mt-8">
              <img
                src={image}
                alt={prompt}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ImageGenerator 