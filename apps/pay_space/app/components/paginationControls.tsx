// components/PaginationControls.tsx
export default function PaginationControls({ 
    currentPage, 
    totalPages, 
    onPageChange 
  }: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }) {
    return (
      <div className="flex justify-center mt-6 gap-4 items-center text-md mt-10">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors duration-200"
        >
          Prev
        </button>
        
        <span className="font-semibold text-gray-700 px-3 py-1 rounded-full">
          Page {currentPage} of {totalPages === 0 ? 1 : totalPages}
        </span>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors duration-200"
        >
          Next
        </button>
      </div>
    );
  }