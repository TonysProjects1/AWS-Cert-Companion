import { GoogleGenAI } from '@google/genai';

async function test() {
  if (!process.env.GEMINI_API_KEY) {
	console.log("No API key");
	return;
  }
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
	model: 'gemini-2.5-flash',
	contents: 'Hello',
  });
  console.log(response.text);
}
test();
