import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const fishName = body?.fishName;

    if (!fishName || typeof fishName !== 'string') {
      return NextResponse.json(
        { error: "Invalid or missing 'fishName' in request body." },
        { status: 400 }
      );
    }

    const lowerName = fishName.toLowerCase();
    let prompt = '';

    if (lowerName === 'patin') {
      prompt = `Give a short description about the fish called 'ikan patin', including its habitat and common usage in cooking or aquaculture.`;
    } else if (lowerName === 'kelisa') {
      prompt = `The fish species '${fishName}' (ikan kelisa) is considered endangered. 
1. Briefly describe this species. 
2. Provide recommended conservation strategies to protect and preserve it in freshwater ecosystems.`;
    } else {
      prompt = `The fish species '${fishName}' may be invasive in freshwater ecosystems. 
1. Provide a brief description of the species. 
2. List recommended actions to safely eliminate or control its population and mitigate its environmental impact.`;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("❌ GEMINI_API_KEY is not defined.");
      return NextResponse.json(
        { error: "Missing Gemini API key in environment variables." },
        { status: 500 }
      );
    }

    // Correct endpoint for Gemini API (free version)
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    // Check if response is ok before parsing JSON
    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Gemini API Error:", res.status, errorText);
      return NextResponse.json(
        { error: `Gemini API error: ${res.status}`, details: errorText },
        { status: 500 }
      );
    }

    const data = await res.json();
    console.log("🔎 Gemini API Response:", JSON.stringify(data, null, 2));

    if (!data.candidates || !data.candidates.length) {
      return NextResponse.json(
        { error: "Failed to get a valid response from Gemini API.", details: data },
        { status: 500 }
      );
    }

    const reply = data.candidates[0].content?.parts?.[0]?.text || "No response from Gemini.";
    return NextResponse.json({ description: reply });

  } catch (error) {
    console.error("❌ Unexpected server error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}