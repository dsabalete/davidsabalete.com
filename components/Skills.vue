<template>
    <section id="skills" class="lg:pr-32">
        <h2>{{ $t("skills_title") }}</h2>

        <h3>{{ $t("skills_programming_languages") }}</h3>
        <ul class="langs-n-tools flex flex-wrap">
            <li>
                <img
                    v-tooltip.bottom="`HTML5`"
                    src="/icons/html5.svg"
                    alt="HTML5"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`CSS3`"
                    src="/icons/css3.svg"
                    alt="CSS3"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`Javascript`"
                    src="/icons/javascript-js.svg"
                    alt="Javascript"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`Vue.js`"
                    src="/icons/vue.svg"
                    alt="Vue.js"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`Nuxt.js: Vue.js Framework`"
                    src="/icons/nuxt.svg"
                    alt="Nuxt.js"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`Jest: Testing Framework`"
                    src="/icons/jest.svg"
                    alt="Jest"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`Webpack: Bundler`"
                    src="/icons/webpack.svg"
                    alt="Webpack"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`React.js &amp; Redux`"
                    src="/icons/react.svg"
                    alt="React"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`Node.js &amp; Express`"
                    src="/icons/node.svg"
                    alt="Node.js"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="
                        `Sass: Syntactically Awesome Style Sheets`
                    "
                    src="/icons/sass.svg"
                    alt="Sass"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`Drupal`"
                    src="/icons/drupal.svg"
                    alt="Drupal"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`Gulp`"
                    src="/icons/gulp.svg"
                    alt="Gulp"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`Grunt`"
                    src="/icons/grunt.svg"
                    alt="Grunt"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`NPM: Node Package Manager`"
                    src="/icons/npm.svg"
                    alt="NPM"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`Yarn: Node Package Manager`"
                    src="/icons/yarn.svg"
                    alt="Yarn"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`Java: Programming Language`"
                    src="/icons/java.svg"
                    alt="Java"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`PHP: Programming Language`"
                    src="/icons/php.svg"
                    alt="PHP"
                />
            </li>
            <li>
                <img
                    v-tooltip.bottom="`Python: Programming Language`"
                    src="/icons/python.svg"
                    alt="Python"
                />
            </li>
        </ul>

        <h3>{{ $t("skills_workflow") }}</h3>
        <ul class="workflow flex flex-col">
            <li>{{ $t("skills_workflow_text_1") }}</li>
            <li>{{ $t("skills_workflow_text_2") }}</li>
            <li>{{ $t("skills_workflow_text_3") }}</li>
            <li>{{ $t("skills_workflow_text_4") }}</li>
            <li>{{ $t("skills_workflow_text_5") }}</li>
            <li>{{ $t("skills_workflow_text_6") }}</li>
        </ul>
    </section>
</template>

<script>
import "v-tooltip/dist/v-tooltip.css"
export default {
    name: "Skills"
}
</script>

<style lang="postcss" scoped>
.langs-n-tools li {
    @apply w-12 mx-4 my-8 hover:scale-150 duration-500;
}
.workflow li:before {
    @apply inline-block ml-0 sm:ml-8 w-8;
    content: "✅";
}
</style>

<style scoped>
.tooltip {
    display: block !important;
    z-index: 100;
}

.tooltip .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
}

.tooltip[x-placement^="top"] {
    margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
    border-width: 5px 5px 0 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
    margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
    border-width: 0 5px 5px 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
    margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
    border-width: 5px 5px 5px 0;
    border-left-color: transparent !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
}

.tooltip[x-placement^="left"] {
    margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
    border-width: 5px 0 5px 5px;
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
}

.tooltip.popover .popover-inner {
    background: #f9f9f9;
    color: black;
    padding: 24px;
    border-radius: 5px;
    box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
    border-color: #f9f9f9;
}

.tooltip[aria-hidden="true"] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden="false"] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
}
</style>
