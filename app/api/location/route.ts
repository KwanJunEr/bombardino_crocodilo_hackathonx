// app/api/location/route.ts
import { NextRequest, NextResponse } from 'next/server';
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { lat, lng } = body;

  if (!lat || !lng) {
    return NextResponse.json(
      { message: "Latitude and longitude are required" },
      { status: 400 }
    );
  }

  // Same logic as GET, but getting data from request body
  const prompt = `
You are a fishing expert. Based on the coordinates (${lat}, ${lng}), recommend 5 beginner-level fishing spots within 50km radius near Pekan, Malaysia. 
Provide only their names and coordinates in this JSON format:
[
  { "name": "Spot 1", "lat": 3.55, "lng": 103.42 },
  ...
]
`;

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const geminiData = await geminiRes.json();
    const rawText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || "[]";
    
    const jsonMatch = rawText.match(/\[[\s\S]*\]/);
    const jsonString = jsonMatch ? jsonMatch[0] : "[]";
    const spots = JSON.parse(jsonString);

    return NextResponse.json({ spots });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch spots" },
      { status: 500 }
    );
  }
}