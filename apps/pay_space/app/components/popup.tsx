import { X } from 'lucide-react';

// @ts-ignore
export const PopupMessage = ({ message, subMessage, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 max-w-md mx-4 relative shadow-2xl border border-indigo-200">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-indigo-400 hover:text-indigo-600 hover:bg-indigo-100 p-2 rounded-full transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="pr-4 pt-2">
          <h3 className="text-indigo-900 text-xl font-semibold mb-3 leading-relaxed">{message}</h3>
          {subMessage && (
            <p className="text-indigo-700 text-sm leading-relaxed opacity-90">{subMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};
