import { getHeader, getRouterParam, sendRedirect, setHeader } from "h3";
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
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

  await supabase.from("clicks").insert({
    coupon_id: coupon.id,
    referrer: referer ?? null,
    user_agent: userAgent ?? null,
    ip_address: ip ?? null,
    clicked_at: new Date().toISOString(),
  });

  return sendRedirect(event, coupon.affiliate_url ?? coupon.landing_url, 302);
});
