import { NextResponse } from "next/server";
export async function POST() {
  try {
    const response = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "ExponentPushToken[jFlqhtPHrG9tvWi22NqqRK]",
        title: "QUIZ GELÖST !!! Per Paypal an Heiner schicken.",
        body: "Honeymoon Quiz",
      }),
    });

    const responseData = await response.json();

    const response2 = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "ExponentPushToken[mRfr9VANA0nWkBDmTk43rR]",
        title: "QUIZ GELÖST !!! Per Paypal an Heiner schicken.",
        body: "Honeymoon Quiz",
      }),
    });

    const responseData2 = await response2.json();

    return NextResponse.json({
      message: "OK",
      data: responseData,
      data2: responseData2,
    });
  } catch (error) {
    return NextResponse.json({
      message: "ERROR",
      error: error,
    });
  }
}
