import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default [
  {languageOptions: { globals: globals.browser }},
  ...compat.extends("airbnb"),
  {
    rules: {
      // Adicione suas regras aqui
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      'semi': ['error', 'always'],
      'quotes': ['warn', 'double'],
      "import/prefer-default-export": "off" | "warn" | "error",
      "import/no-named-as-default-member": "off" | "warn" | "error",
      "import/no-named-as-default": "off" | "warn" | "error",
      "max-len": "off" | "warn" | "error",
      "react/no-unescaped-entities": "off" | "warn" | "error",
      "no-console": "off" | "warn" | "error",
      "import/no-extraneous-dependencies": "off" | "warn" | "error",
      "import/no-unresolved": "off" | "warn" | "error",
      "linebreak-style": "off" | "warn" | "error",
      "no-unused-vars": "off" | "warn" | "error",
    }
  }
];