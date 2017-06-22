copy .\myGame.js .\dist\
copy .\js\images.js .\dist\
del .\dist\runner.js
type .\js\util.js .\js\collision.js .\js\shape.js .\js\scene.js .\js\runner.js .\js\game.js >> .\dist\runner.js

minify dist/runner.js