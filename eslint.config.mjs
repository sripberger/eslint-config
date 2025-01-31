import path from "node:path";
import {fileURLToPath} from "node:url";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";

const file = fileURLToPath(import.meta.url);
const dir = path.dirname(file);
const compat = new FlatCompat({
	baseDirectory: dir,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});
export default [...compat.extends("@sripberger/eslint-config-plain/meta")];
