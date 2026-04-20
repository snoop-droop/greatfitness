import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const [rows]: any = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return NextResponse.json({ message: "Invalid" }, { status: 401 });
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return NextResponse.json({ message: "Invalid" }, { status: 401 });
    }

    //  Create session
    const token = crypto.randomBytes(32).toString("hex");

    await db.query(
      "INSERT INTO sessions (user_id, session_token) VALUES (?, ?)",
      [user.id, token]
    );

    //  Set cookie
    const res = NextResponse.json({ message: "Login successful" });
    res.cookies.set("session", token, {
      httpOnly: true,
      path: "/",
    });

    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}