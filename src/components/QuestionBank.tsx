import { useState, useEffect } from 'react';
import { practiceQuestionsData } from '../data/practiceQuestionsData';
import { Archive, Bookmark, BookmarkCheck, CheckCircle2 } from 'lucide-react';

export function QuestionBank() {
  const [reviewedQuestions, setReviewedQuestions] = useState<Set<string>>(new Set());
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());

  useEffect(() => {
    const savedReviewed = localStorage.getItem('aws-ai-reviewed-questions');
    if (savedReviewed) {
      setReviewedQuestions(new Set(JSON.parse(savedReviewed)));
    }

    const savedFlagged = localStorage.getItem('aws-ai-flagged-questions');
    if (savedFlagged) {
      setFlaggedQuestions(new Set(JSON.parse(savedFlagged)));
    }
  }, []);

  const toggleFlag = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFlaggedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem('aws-ai-flagged-questions', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const domains = [
    { id: 'all', name: 'All Questions' },
    ...Array.from(new Set(practiceQuestionsData.map(q => q.domainId))).map(domainId => ({
      id: domainId,
      name: practiceQuestionsData.find(q => q.domainId === domainId)?.domainName || domainId
    }))
  ];

  const [selectedDomain, setSelectedDomain] = useState('all');

  const filteredQuestions = practiceQuestionsData.filter(q => 
    selectedDomain === 'all' || q.domainId === selectedDomain
  );

  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-serif italic font-bold tracking-tight leading-[0.85] mb-6">
            Question Bank.
          </h1>
          <p className="text-sm leading-relaxed opacity-70 italic border-l-2 border-[#FF9900] pl-6 font-serif max-w-xl">
            Browse and review the high standard compendium of practice items. Items you have seen in exams are marked.
          </p>
        </div>
        <div className="flex flex-col gap-2 shrink-0 border border-[#1A1A1A]/10 p-4 bg-white/50">
          <div className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2">Filters</div>
          <select 
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
            className="bg-transparent border-b border-[#1A1A1A] py-1 text-sm focus:outline-none focus:border-[#FF9900]"
          >
            {domains.map(d => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-12">
        {filteredQuestions.map((q, i) => {
          const isReviewed = reviewedQuestions.has(q.id);
          const isFlagged = flaggedQuestions.has(q.id);

          return (
            <div key={q.id} className={`p-8 border ${isReviewed ? 'border-[#1A1A1A]/20 bg-white shadow-sm' : 'border-[#1A1A1A]/10 bg-transparent'} relative group transition-all`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-widest bg-[#1A1A1A] text-white px-2 py-1 font-bold">
                    Q{i + 1}
                  </span>
                  <span className="text-xs font-serif italic opacity-60">
                    {q.domainName}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  {isReviewed && (
                    <div className="flex items-center gap-1.5 text-green-600 text-[10px] uppercase tracking-widest font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Reviewed</span>
                    </div>
                  )}
                  <button 
                    onClick={(e) => toggleFlag(q.id, e)}
                    className="opacity-50 hover:opacity-100 transition-opacity"
                    title={isFlagged ? "Remove from Review" : "Flag for Review"}
                  >
                    {isFlagged ? (
                      <BookmarkCheck className="w-5 h-5 text-[#FF9900]" />
                    ) : (
                      <Bookmark className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-bold font-serif mb-6 leading-relaxed">
                {q.question}
              </h3>

              <div className="space-y-3">
                {q.options.map(option => (
                  <div 
                    key={option.id} 
                    className={`p-4 border text-sm flex gap-4 ${option.isCorrect ? 'border-green-500/30 bg-green-50/50' : 'border-[#1A1A1A]/10 opacity-70'} transition-all relative overflow-hidden`}
                  >
                    {option.isCorrect && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
                    )}
                    <div className="font-bold uppercase h-6 w-6 flex items-center justify-center border border-[#1A1A1A]/20 shrink-0 bg-white">
                      {option.id}
                    </div>
                    <div>
                      <div className="font-medium mb-1">{option.text}</div>
                      <div className="text-xs opacity-80 leading-relaxed font-serif italic">
                        {option.explanation}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        {filteredQuestions.length === 0 && (
          <div className="text-center py-24 opacity-50 font-serif italic border border-dashed border-[#1A1A1A]/20">
            No questions available for this domain.
          </div>
        )}
      </div>
    </div>
  );
}
