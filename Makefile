install:
	npm ci
link:
	npm link
brain-games:
	node bin/index.js
publish:
	npm publish --dry-run
lint:
	npx eslint .