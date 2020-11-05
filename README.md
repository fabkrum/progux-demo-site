# ProgUX Demo Site

## Pages
If you add new pages, update js/routes.js

Pages are loaded via the page query parameter. So https://vanillaHTML.com/?page=terms will load the terms.html page. This is setup in routes.js

## Components
Web components can be built as single HTML files. CSS at the top, HTML in the middle and Javascript at the bottom. Include all Javascript between script tags at the bottom of the file, don't use inline Javascript.

See the examples in components/

These can be loaded via the utils.loadModule('components/header.html','header');

1st parameter is the path to the file, 2nd is the dom ID to inject the code.

This allows for modular and 3rd party components to be added with ease.


