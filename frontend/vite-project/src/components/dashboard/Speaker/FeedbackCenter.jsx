import React from 'react';
import { Star } from 'lucide-react';

const FeedbackCenter = ({ feedbacks }) => (
  <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-white">Feedback Center</h2>
      <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
        View All Feedback
      </button>
    </div>

    <div className="space-y-4 max-h-96 overflow-y-auto">
      {feedbacks.length === 0 && (
        <p className="text-center text-slate-400 py-6">No feedback available yet.</p>
      )}

      {feedbacks.map((fb) => (
        <div
          key={fb.id}
          className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50 hover:bg-slate-700 transition-colors"
        >
          <div className="flex items-center gap-2 mb-2">
            {[...Array(fb.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-white font-semibold mb-1">{fb.session}</p>
          <p className="text-slate-300 italic">{`"${fb.comment}"`}</p>
          <p className="text-sm text-slate-400 mt-2">From: {fb.from}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeedbackCenter;
