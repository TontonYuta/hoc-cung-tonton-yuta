import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the Gemini AI client
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const modelId = 'gemini-3-flash-preview';
    
    // Transform history to the format expected by the SDK if using chat session
    // For simple stateless calls or if we manage history manually:
    
    // Construct the prompt with history context
    const contextPrompt = `
      Bạn là một gia sư Toán học thông minh, thân thiện và kiên nhẫn tên là "MathMaster AI". 
      Nhiệm vụ của bạn là giúp học sinh (từ lớp 6 đến lớp 12) giải đáp thắc mắc, giải bài tập và hiểu sâu lý thuyết.
      
      Hướng dẫn:
      1. Trả lời ngắn gọn, súc tích, dễ hiểu.
      2. Sử dụng định dạng Markdown cho công thức toán học (ví dụ: $x^2 + 2x + 1 = 0$).
      3. Nếu học sinh hỏi bài tập, hãy gợi ý phương pháp giải trước khi đưa ra đáp án chi tiết.
      4. Luôn khích lệ tinh thần học tập.

      Lịch sử trò chuyện:
      ${history.map(h => `${h.role === 'user' ? 'Học sinh' : 'Gia sư'}: ${h.text}`).join('\n')}
      
      Học sinh: ${message}
      Gia sư:
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: contextPrompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable explicit thinking for speed in chat
      }
    });

    return response.text || "Xin lỗi, tôi đang gặp chút sự cố khi suy nghĩ. Bạn hãy hỏi lại nhé!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã có lỗi xảy ra khi kết nối với gia sư AI. Vui lòng kiểm tra API Key hoặc thử lại sau.";
  }
};
