import { NextResponse } from 'next/server';

const AZURE_SUBSCRIPTION_ID = process.env.AZURE_SUBSCRIPTION_ID;
const AZURE_TENANT_ID = process.env.AZURE_TENANT_ID;
const AZURE_CLIENT_ID = process.env.AZURE_CLIENT_ID;
const AZURE_CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET;
const AZURE_OPENAI_API_KEY = process.env.AZURE_OPENAI_API_KEY;
const AZURE_OPENAI_ENDPOINT = process.env.AZURE_OPENAI_ENDPOINT;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await fetch(AZURE_OPENAI_ENDPOINT!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': AZURE_OPENAI_API_KEY!,
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: `You are a helpful nutrition and fitness assistant for Level Up Nutrition. 
            You provide expert advice on supplements, nutrition, and fitness. 
            Keep responses concise, friendly, and professional. 
            Focus on helping users achieve their health and fitness goals. 
            If you don't know something, be honest about it. 
            Always recommend consulting with a healthcare professional for medical advice.`
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    return NextResponse.json({ message: data.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
} 