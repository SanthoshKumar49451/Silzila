import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const context = `
You are an AI assistant for Techwens Software Private Limited, an IT company based in Kolkata. Answer questions based only on the following context:
Techwens was founded on April 21, 2021. Services include application development, website development, mobile app development, UI/UX design, cloud services, SEO, social media marketing, and branding.
The company uses technologies like PHP, JavaScript, C++, SQL, AJAX, Node.js, React, React Native, AngularJS, Laravel, WordPress, and Wix. They follow Agile methodology.
Company size: 10–49 employees. Certified with ISO 9001:2015 and ISO 27001.
Main office: 14, PS Srijan Corporate Park Tower 1, Block GP, Bidhan Nagar, Kolkata, West Bengal 700091.  
Alternate: 33/25/1, Belgachia Road, Liluah, Howrah, West Bengal 711204.  
Website: techwens.com  
Contact: support@techwens.com | +91 9432499608
`;

export async function POST(request) {
  try {
  
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    
   
    const { text } = await request.json();
 
    if (!text) {
      return NextResponse.json({
        message: "Add a question",
      }, { status: 400 });
    }

    // Get the generative model with configuration
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
      ],
    });

 
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ 
            text: `System context: ${context}\n\nAnswer based on the information provided above like pointers. If the question is outside the scope of Techwens Software Private Limited, simply say "I'm sorry, I can only provide information about Techwens Software Private Limited."` 
          }],
        },
        {
          role: "model",
          parts: [{ 
            text: "I understand. I'll answer questions only about Techwens Software Private Limited based on the provided context." 
          }],
        },
      ],
    });

    
    const result = await chat.sendMessage(text);
    const response = await result.response;
    const answer = response.text();

   
    return NextResponse.json({
      answer: answer,
    });

  } catch (error) {
    console.error("Error generating response:", error);
    
    return NextResponse.json({
      message: "Error generating response",
      error: error.message,
    }, { status: 500 });
  }
}
