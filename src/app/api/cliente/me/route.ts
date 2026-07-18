import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  CUSTOMER_COOKIE,
  getCustomerById,
  verifyCustomerToken,
} from "@/lib/customers";

export async function GET() {
  const cookieStore = await cookies();
  const id = verifyCustomerToken(cookieStore.get(CUSTOMER_COOKIE)?.value);
  if (!id) return NextResponse.json({ customer: null });

  const customer = await getCustomerById(id);
  return NextResponse.json({ customer });
}
