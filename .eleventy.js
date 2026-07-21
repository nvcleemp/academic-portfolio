module.exports = function(eleventyConfig) {
  // Pass through assets (images, CSS, PDFs, etc.)
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("docs");
  eleventyConfig.addPassthroughCopy("styles.css");
  
  // Watch for CSS changes
  eleventyConfig.addWatchTarget("styles.css");
  
  // Set custom directories
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
