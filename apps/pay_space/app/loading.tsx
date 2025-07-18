// app/loading.tsx

export default function Loading() {
    return (
      <div className="flex items-center mt-20 justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-700 font-medium text-lg">Loading...</p>
        </div>
      </div>
    );
  }
  