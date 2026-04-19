import { serverSupabaseClient } from "#supabase/server";

export default defineSitemapEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);

  const { data, error } = await supabase
    .from("coupons")
    .select("slug, updated_at")
    .eq("is_active", true)
    .not("slug", "is", null)
    .order("id", { ascending: false });

  if (error) {
    console.error("coupons sitemap error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }

  return (data ?? []).map((coupon) => ({
    loc: `/coupon/${coupon.slug}`,
    lastmod: coupon.updated_at
      ? new Date(coupon.updated_at).toISOString()
      : new Date().toISOString(),
  }));
});
