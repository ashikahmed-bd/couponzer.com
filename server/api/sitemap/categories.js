import { serverSupabaseClient } from "#supabase/server";

export default defineSitemapEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);

  const { data, error } = await supabase
    .from("categories")
    .select("slug, updated_at")
    .not("slug", "is", null)
    .order("id", { ascending: false });

  if (error) {
    console.error("categories sitemap error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }

  return (data ?? []).map((category) => ({
    loc: `/category/${category.slug}`,
    lastmod: category.updated_at
      ? new Date(category.updated_at).toISOString()
      : new Date().toISOString(),
  }));
});
