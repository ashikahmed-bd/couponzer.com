<script setup>
const route = useRoute();
const supabase = useSupabaseClient();

const slug = computed(() => String(route.params.slug));

const {
  data: page,
  error,
  status,
} = await useAsyncData(`page-${slug.value}`, async () => {
  const { data, error } = await supabase
    .from("pages")
    .select("*")
    .eq("slug", slug.value)
    .eq("is_active", true)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null;
    throw error;
  }

  return data;
});
</script>

<template>
  <main>
    <SeoMeta
      :title="page.meta_title"
      :description="page.meta_description"
      :keywords="page.meta_keywords"
    />

    <section class="relative overflow-hidden bg-white/50 py-8">
      <div class="relative max-w-4xl mx-auto px-4 text-center">
        <span
          class="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-medium text-primary"
        >
          {{ page.name }}
        </span>

        <h1 class="text-3xl md:text-5xl font-bold text-dark leading-tight py-4">
          {{ page.title }}
        </h1>

        <p
          class="text-base md:text-lg text-body leading-relaxed max-w-2xl mx-auto"
        >
          {{ page.summary }}
        </p>
      </div>
    </section>
    <section class="bg-white/90">
      <div class="max-w-5xl mx-auto px-4">
        <div class="rounded-2xl p-6">
          <MarkdownPreview :content="page.content" class="markdown" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
:deep(.markdown) {
  color: #334155;
  font-size: 16px;
  line-height: 1.9;
}

:deep(.markdown h1),
:deep(.markdown h2),
:deep(.markdown h3),
:deep(.markdown h4),
:deep(.markdown h5),
:deep(.markdown h6) {
  margin: 1.5em 0 0.7em;
  font-weight: 700;
  line-height: 1.3;
  color: #0f172a;
}

:deep(.markdown h1) {
  font-size: 1.65rem;
}
:deep(.markdown h2) {
  font-size: 1.35rem;
}
:deep(.markdown h3) {
  font-size: 1rem;
}

:deep(.markdown p) {
  color: #475569;
  margin-bottom: 1rem;
}

:deep(.markdown ul) {
  padding-left: 1.5rem;
  list-style: disc;
}

:deep(.markdown ol) {
  padding-left: 1.5rem;
  list-style: decimal;
}

:deep(.markdown li) {
  margin: 0;
}

:deep(.markdown a) {
  color: #059669;
  font-weight: 600;
  text-decoration: none;
}

:deep(.markdown a:hover) {
  text-decoration: underline;
}

:deep(.markdown blockquote) {
  padding: 1rem 1.25rem;
  border-left: 4px solid #10b981;
  border-radius: 0.75rem;
  background: #f8fafc;
  color: #475569;
}

:deep(.markdown pre) {
  overflow-x: auto;
  margin: 1.25rem 0;
  padding: 1rem;
  border-radius: 0.75rem;
  background: #0f172a;
  color: #e2e8f0;
}

:deep(.markdown code) {
  background: #f1f5f9;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.9em;
}

:deep(.markdown img) {
  margin: 1rem 0;
  border-radius: 0.75rem;
  max-width: 100%;
}

:deep(.markdown table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.25rem 0;
}

:deep(.markdown th),
:deep(.markdown td) {
  border: 1px solid #e2e8f0;
  padding: 0.75rem 1rem;
  text-align: left;
}

:deep(.markdown th) {
  background: #f8fafc;
  color: #0f172a;
}
</style>
