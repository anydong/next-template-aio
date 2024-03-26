import alloy from 'eslint-config-alloy/.prettierrc.js'

/** @type {import('prettier').Config} */
const config = {
  ...alloy,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-packagejson', 'prettier-plugin-tailwindcss']
}

export default config