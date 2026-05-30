import { FaStar } from "react-icons/fa";

interface Comment {
  id: number;
  user: string;
  date: string;
  rating: number;
  title: string;
  text: string;
  avatar?: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className="mt-8 space-y-5">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
          {comment.avatar ? (
            <img
              src={comment.avatar}
              alt={comment.user}
              className="w-10 h-10 rounded-full object-cover shrink-0"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-300 shrink-0"></div>
          )}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-gray-900">
                {comment.user}
              </span>
              <span className="text-xs text-gray-400">{comment.date}</span>
            </div>
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-xs ${i < comment.rating ? "text-amber-400" : "text-gray-200"}`}
                />
              ))}
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              {comment.title}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {comment.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
