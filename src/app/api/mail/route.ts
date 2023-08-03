import { NextResponse, NextRequest } from "next/server";
import Mailgun from "mailgun.js";

export async function POST() {
  try {
    const formData = require("form-data");
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: "api",
      key: "1ed7b6042165cd53ecb70fff4b147eb1-262b213e-0b4aaf67",
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
