import { getHeader, getRouterParam, sendRedirect } from "h3";
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing slug",
    });
  }

  const supabase = await serverSupabaseClient(event);

  const { data: coupon, error } = await supabase
    .from("coupons")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !coupon) {
    throw createError({
      statusCode: 404,
      statusMessage: "Coupon not found",
    });
  }

  const referer = getHeader(event, "referer") || null;
  const userAgent = getHeader(event, "user-agent") || null;

  await supabase.from("clicks").insert({
    coupon_id: coupon.id,
    referer,
    user_agent: userAgent,
  });

  return sendRedirect(event, coupon.affiliate_url, 302);
});
