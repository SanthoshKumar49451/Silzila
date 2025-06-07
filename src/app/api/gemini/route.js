import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
export const context = `
Overview:
Name: Silzila
Website: https://silzila.com
Description: Silzila is an open-source Business Intelligence (BI) tool that allows users to explore, analyze, and visualize data without writing code.
Company: Silzila Technologies Pvt Ltd
Founded: January 5, 2024
Headquarters: Karur, Tamil Nadu, India
Incorporation Number: U62099TZ2024PTC030331
Authorized Capital: ₹2,000,000
Paid-Up Capital: ₹1,020,000
Directors: Mariyappagoundar Subramanian, Subbiramaniyan Thulasimani
Industry: Computer Systems Design and Related Services
Mission: To make data analysis simple and accessible through a user-friendly BI platform.

Features:
- No-Code Formula Builder: Allows users to create complex calculations using a drag-and-drop interface, eliminating the need for SQL.
- Window Functions: Support for advanced functions like ranking, running totals, and moving averages, without writing code.
- Override Functionality: Lets users override dimensions and filters for specific measures in visualizations.
- Database Connectivity: Connects to databases and flat files with reusable connection settings.
- Dashboard Creation: Users can build interactive dashboards with multiple tabs and tiles, including text, charts, and filters.
- Export Options: Download dashboards as PDF or image for easy sharing and presentation.
- SQL Generation: Get the SQL query for any chart with just two clicks.
- Advanced Filters: Apply and customize filters to interact with data effectively.
- Rich Text Support: Incorporate formatted text into dashboards for enhanced storytelling.
- Reusable Components: Save and reuse datasets, formulas, and connections across projects.

Products:
- Open Source: Free version available as a Java JAR file; requires Java 17; suitable for self-hosting and customization.
- Community (Personal): Web-based SaaS version with no installation required; includes 50MB file uploads and 50 playbooks.
- Business & Enterprise: Premium versions with SSO, advanced security, larger data limits, and enterprise support.

Roadmap:
- Demo Dashboards for beginners.
- New chart types: Radar and Waterfall.
- Google Sheets integration.
- REST API as a data source.
- Row and column-level security.
- Email subscriptions for automated reports.

Resources:
- Documentation: https://silzila.com/docs
- Tutorials: https://silzila.com/videos
- Roadmap: https://silzila.com/road-map
- GitHub: https://github.com/silzila-org/silzila

Contact:
- Email: mail@silzila.com
- Address: Silzila Technologies Pvt Ltd, Karur, Tamil Nadu, India
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
            text: `System context: ${context}

Answer based on the information provided above like pointers.  
If the question is outside the scope of Silzila, simply say:  
"I'm sorry, I can only provide information about Silzila."  
Do not mention the provided text.
`
          }],
        },
        {
          role: "model",
          parts: [{
            text: "I understand. I'll answer questions only about Silzila tech based on the provided context."
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
