const { DateTime } = (() => {
  try {
    // Optional dependency; falls back to native Date formatting if not installed.
    return require("luxon");
  } catch (e) {
    return { DateTime: null };
  }
})();

module.exports = function (eleventyConfig) {
  // Static assets passthrough
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  // Human friendly date filter, used in publication metadata.
  eleventyConfig.addFilter("readableDate", (dateObj, locale = "en-CA") => {
    if (DateTime) {
      return DateTime.fromJSDate(new Date(dateObj)).setLocale(locale).toFormat("dd LLL yyyy");
    }
    return new Date(dateObj).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => new Date(dateObj).toISOString().slice(0, 10));

  // Returns the same publication in the other language, matched by `translationKey`.
  eleventyConfig.addFilter("translation", (collection, translationKey, lang) => {
    if (!collection) return undefined;
    return collection.find(
      (item) => item.data.translationKey === translationKey && item.data.lang === lang
    );
  });

  eleventyConfig.addFilter("publicationForKey", (collection, publicationKey, lang) => {
    if (!collection || !publicationKey) return undefined;
    return collection.find(
      (item) => item.data.translationKey === publicationKey && item.data.lang === lang
    );
  });

  eleventyConfig.addFilter("updatesForPublication", (collection, publicationKey, lang) => {
    if (!collection || !publicationKey) return [];
    return collection
      .filter((item) => item.data.publicationKey === publicationKey && item.data.lang === lang)
      .sort((a, b) => b.date - a.date);
  });

  // All bilingual publications, tagged "publications" in front matter.
  eleventyConfig.addCollection("publications", (collectionApi) => {
    return collectionApi.getFilteredByTag("publications").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("publicationsEn", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("publications")
      .filter((item) => item.data.lang === "en")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("publicationsFr", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("publications")
      .filter((item) => item.data.lang === "fr")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("updates", (collectionApi) => {
    return collectionApi.getFilteredByTag("updates").sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
