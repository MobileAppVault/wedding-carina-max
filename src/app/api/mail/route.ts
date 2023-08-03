import { NextResponse, NextRequest } from "next/server";
import Mailgun from "mailgun.js";

export async function POST() {
  try {
    return NextResponse.json({
      message: "OK",
      repsone: "",
    });
    
    const formData = require("form-data");
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: "api",
      key: "",
    });
    var data = await mg.messages.create(
      "sandbox6fc34d4514554772bb76936a1a4413e5.mailgun.org",
      {
        from: "Mailgun Sandbox <postmaster@sandbox6fc34d4514554772bb76936a1a4413e5.mailgun.org>",
        to: ["marcus@rudauskas.de", "nicole@rudauskas.de"],
        subject: "Honeymoon - Quiz is answered",
        text: "Geld per Paypal überweisen",
      }
    );
    return NextResponse.json({
      message: "OK",
      repsone: data,
    });
  } catch (error) {
    return NextResponse.json({
      message: "ERROR",
      error: error,
    });
  }
}
