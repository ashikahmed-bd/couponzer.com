import { getRouterParam, sendRedirect, setHeader } from "h3";
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

  const { data: banner, error } = await supabase
    .from("banners")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !banner) {
    throw createError({
      statusCode: 404,
      statusMessage: "Banner not found",
    });
  }

  return sendRedirect(event, banner.redirect_url, 302);
});
