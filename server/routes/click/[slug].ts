import { serverSupabaseServiceRole } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug) {
    return sendRedirect(event, '/', 302)
  }

  const supabase = serverSupabaseServiceRole(event)

  const { data: coupon, error } = await supabase
    .from('coupons')
    .select('id, affiliate_url, deal_url, click_count')
    .eq('slug', slug)
    .maybeSingle()

  if (error || !coupon) {
    return sendRedirect(event, '/', 302)
  }

  const targetUrl = coupon.affiliate_url ?? coupon.deal_url,

  await supabase
    .from('coupons')
    .update({
      click_count: (coupon.click_count || 0) + 1,
    })
    .eq('id', coupon.id)

  return sendRedirect(event, targetUrl, 302)
})