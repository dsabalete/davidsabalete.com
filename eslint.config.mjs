// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
  // Your custom configs here
  // allow self-closing on HTML void elements
  {
    rules: {
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "any",
            normal: "always",
            component: "always"
          },
          svg: "always",
          math: "always"
        }
      ]
    }
  }
)
