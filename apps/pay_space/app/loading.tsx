// app/loading.tsx

export default function Loading() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-700 font-medium text-lg">Loading Dashboard...</p>
        </div>
      </div>
    );
  }
  