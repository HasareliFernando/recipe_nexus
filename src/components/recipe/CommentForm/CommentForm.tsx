import { useState } from "react";
import { FaStar } from "react-icons/fa";

const CommentForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="mt-12 border-t border-gray-100 pt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="bg-transparent border-none cursor-pointer p-0"
            >
              <FaStar
                className={`text-lg ${
                  star <= (hover || rating) ? "text-amber-400" : "text-gray-200"
                }`}
              />
            </button>
          ))}
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
          rows={3}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm resize-none outline-none focus:border-orange-400 transition-colors mb-4"
        />
        <button
          type="submit"
          className="px-6 py-2.5 bg-orange-500 text-white border-none rounded-lg text-sm font-semibold cursor-pointer hover:bg-orange-600 transition-colors"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
