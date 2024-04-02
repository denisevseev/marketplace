import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    if (!email) {
      return new NextResponse(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    

    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    console.log(response);

    if (!response.ok) {
      throw new Error(`${response} (${response})`);
    }

    return new NextResponse(JSON.stringify({ answer: response }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        error: "error" || "An error occurred during subscription.",
      }),
      { status: 500 }
    );
  }
}
