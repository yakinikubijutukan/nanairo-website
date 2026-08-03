import { NextResponse } from "next/server";

/**
 * The contact form (and this endpoint) have been removed. /contact now
 * shows company info only (email, "Nanairo LLC", location) — no form, no
 * Resend integration, nothing to submit here.
 *
 * This file could not be deleted from this environment (sandbox
 * restriction on removing previously-written files, even in the connected
 * folder). It's kept only as an inert stub so a stray request doesn't 404
 * in a confusing way. Please delete the whole app/api/contact directory
 * yourself for a clean tree — it is not referenced from anywhere in the app.
 */
export async function POST() {
  return NextResponse.json(
    { error: "This endpoint has been removed. The contact form was retired site-wide." },
    { status: 410 }
  );
}
