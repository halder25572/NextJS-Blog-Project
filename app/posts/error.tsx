'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-6 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-green-500 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Something went wrong fetching segment try again
        </h2>
        <p className="text-gray-600 max-w-md">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
      </div>

      <button
        onClick={reset}
        className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors shadow-lg"
      >
        Try Again
      </button>
    </div>
  )
}