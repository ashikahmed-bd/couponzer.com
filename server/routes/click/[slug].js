import { getHeader, getRouterParam, sendRedirect, setHeader } from "h3";
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  // redirect route search engine-e index na korte
  setHeader(event, "X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");

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

  const referer = getHeader(event, "referer") ?? null;
  const userAgent = getHeader(event, "user-agent") ?? null;
  const forwardedFor = getHeader(event, "x-forwarded-for") ?? null;
  const ip =
    forwardedFor?.split(",")[0]?.trim() ||
    event.node.req.socket.remoteAddress ||
    null;

  // logging fail hole redirect bondho korbo na
  supabase
    .from("clicks")
    .insert({
      coupon_id: coupon.id,
      referer,
      user_agent: userAgent,
      ip_address: ip,
      clicked_at: new Date().toISOString(),
    })
    .then(() => {})
    .catch((err) => {
      console.error("Click log failed:", err);
    });

  return sendRedirect(event, coupon.affiliate_url, 302);
});
