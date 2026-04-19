import { serverSupabaseClient } from "#supabase/server";

export default defineSitemapEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);

  const { data, error } = await supabase
    .from("stores")
    .select("slug, updated_at")
    .eq("status", "active")
    .not("slug", "is", null)
    .order("id", { ascending: false });

  if (error) {
    console.error("stores sitemap error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }

  return (data || []).map((store) => ({
    loc: `/store/${store.slug}`,
    lastmod: store.updated_at || new Date().toISOString(),
  }));
});
