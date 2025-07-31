install:
	npm ci
start-game:
	node bin/cli.js
publish:
	npm publish --dry-run
lint:
	npx eslint .