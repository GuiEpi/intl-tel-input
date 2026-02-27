module.exports = function(grunt) {
  return {

    /**************
     * README file
     * Update versions numbers
     **************/
    readme: {
      options: {
        patterns: [
          {
            match: /intl-tel-input@([0-9.]+)\/build/g,
            replacement: 'intl-tel-input@<%= package.version %>/build'
          }
        ]
      },
      files: {
        'site/src/docs/markdown/options.md': 'site/src/docs/markdown/options.md',
        'site/src/docs/markdown/getting_started.md': 'site/src/docs/markdown/getting_started.md',
      }
    },
    issueTemplate: {
      options: {
        patterns: [
          {
            match: /e\.g\. v[0-9]+\.[0-9]+\.[0-9]+ \(please try latest version\)/,
            replacement: 'e.g. v<%= package.version %> (please try latest version)'
          }
        ]
      },
      files: {
        '.github/ISSUE_TEMPLATE.md': '.github/ISSUE_TEMPLATE.md'
      }
    },

    /**************
     * Generate reactWithUtils.tsx
     **************/
    reactWithUtils: {
      options: {
        patterns: [
          {
            match: /import intlTelInput from \"\.\.\/intl\-tel\-input\"\;/,
            replacement: '//* THIS FILE IS AUTO-GENERATED. DO NOT EDIT.\nimport intlTelInput from "./intlTelInputWithUtils";'
          }
        ]
      },
      files: {
        'react/src/intl-tel-input/reactWithUtils.tsx': 'react/src/intl-tel-input/react.tsx',
      }
    },

    /**************
     * Generate vue/src/IntlTelInputWithUtils.vue
     **************/
    vueWithUtils: {
      options: {
        patterns: [
          {
            match: /\<script setup lang=\"ts\"\>\simport intlTelInput from \"\.\/intl\-tel\-input\"\;/,
            replacement: '<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT. -->\n<script setup lang="ts">\nimport intlTelInput from "./intl-tel-input/intlTelInputWithUtils";'
          }
        ]
      },
      files: {
        'vue/src/IntlTelInputWithUtils.vue': 'vue/src/IntlTelInput.vue',
      }
    },

    /**************
     * Generate angular/src/angularWithUtils.ts
     **************/
    angularWithUtils: {
      options: {
        patterns: [
          {
            match: /import intlTelInput from \"\.\.\/intl\-tel\-input\"\;/,
            replacement: '//* THIS FILE IS AUTO-GENERATED. DO NOT EDIT.\nimport intlTelInput from "./intlTelInputWithUtils";'
          }
        ]
      },
      files: {
        'angular/src/intl-tel-input/angularWithUtils.ts': 'angular/src/intl-tel-input/angular.ts',
      }
    },

    /**************
     * Generate svelte/src/IntlTelInputWithUtils.svelte
     **************/
    svelteWithUtils: {
      options: {
        patterns: [
          {
            match: /\<script lang="ts"\>\s*import intlTelInput from "\.\.\/intl\-tel\-input"\;/,
            replacement: '<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT. -->\n<script lang="ts">\nimport intlTelInput from "./intlTelInputWithUtils";'
          }
        ]
      },
      files: {
        'svelte/src/intl-tel-input/IntlTelInputWithUtils.svelte': 'svelte/src/intl-tel-input/IntlTelInput.svelte',
      }
    },
  };
};