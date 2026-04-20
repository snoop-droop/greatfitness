import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";

export async function POST() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  if (session) {
    await db.query(
      "DELETE FROM sessions WHERE session_token = ?",
      [session.value]
    );
  }

  const res = NextResponse.json({ message: "Logged out" });
  res.cookies.set("session", "", {
    maxAge: 0,
    path: "/",
  });

  return res;
}