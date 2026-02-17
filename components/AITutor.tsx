import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, Minimize2, Maximize2, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AITutor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Chào bạn! Mình là MathMaster AI. Bạn cần giúp đỡ gì về bài toán hôm nay không?', timestamp: Date.now() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(inputText, messages);
      setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: Date.now() }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Có lỗi xảy ra, vui lòng thử lại.', timestamp: Date.now() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="group relative flex items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 p-1 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <div className="absolute inset-0 bg-blue-400 opacity-20 rounded-full blur-md animate-pulse"></div>
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center relative z-10 shadow-inner border border-white/20">
             <Bot className="w-6 h-6 text-white" />
        </div>
        <span className="pr-4 pl-1 font-semibold text-sm max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Hỏi gia sư AI
        </span>
      </button>
    );
  }

  return (
    <div className={`flex flex-col overflow-hidden transition-all duration-300 rounded-2xl shadow-2xl bg-white border border-slate-200 ${isExpanded ? 'w-[80vw] h-[80vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50' : 'w-[380px] h-[600px]'}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex justify-between items-center text-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight flex items-center gap-2">
                MathMaster <Sparkles className="w-3 h-3 text-yellow-300" />
            </h3>
            <p className="text-[10px] text-blue-100 uppercase tracking-widest font-medium opacity-90">
              Gia sư thông minh
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
            <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-blue-100 hover:text-white"
            >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-blue-100 hover:text-white"
            >
                <X className="w-5 h-5" />
            </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-hide">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm border ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none border-blue-600' 
                : 'bg-white text-slate-800 rounded-tl-none border-slate-200'
            }`}>
              <div className={`prose prose-sm max-w-none ${msg.role === 'user' ? 'prose-invert text-white' : 'prose-slate'}`}>
                 <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
              <span className={`text-[10px] block mt-1 opacity-60 ${msg.role === 'user' ? 'text-blue-100' : 'text-slate-400'}`}>
                {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
              <span className="text-sm text-slate-500">Đang suy nghĩ...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100 shrink-0">
        <div className="relative flex items-end gap-2 bg-slate-50 rounded-xl border border-slate-200 p-2 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all focus-within:bg-white">
          <textarea
            ref={inputRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Hỏi bài tập..."
            className="w-full bg-transparent border-none focus:ring-0 resize-none max-h-32 min-h-[44px] py-2.5 px-2 text-sm text-slate-800 placeholder-slate-400 scrollbar-hide"
            rows={1}
            style={{ height: 'auto', minHeight: '44px' }}
            onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = `${Math.min(target.scrollHeight, 128)}px`;
            }}
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim() || isLoading}
            className="p-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0 mb-0.5 shadow-md shadow-blue-200"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};