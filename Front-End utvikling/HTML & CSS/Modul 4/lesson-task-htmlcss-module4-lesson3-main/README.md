# HTML and CSS Module 4

## Task 3

### Brief
In this task you will re-factor your CSS file to make it easier to manage and maintain.

By the end of the task you should have:
- Changed the background-image to use the 'background' shorthand, reducing the lines needed. Hint: [description of 'background' on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
- Reduced the number of times "width: 100%" is set on images
- Broken the CSS file into multiple CSS files for each page (note: consider your media queries)
- Created an imports folder with a stylesheet for the site links, and a stylesheet for CSS Variables.
- Made CSS Variables for the heading font, the paragraph font, and the grey color used in the header and footer.
- Changed 'grid-gap' to the latest specification of 'gap'

Note: the website shouldn't change in appearance, but the styles should become easier to follow and edit.

## Multiple Stylesheets vs Single Stylesheet
Having one single stylesheet is good for speeding up load time, while having one global stylesheet and an additional stylesheet per page can help you maintain the project a bit more easily. The decision is largely up to the developer, but if you are unsure at all rather stick with one global stylesheet for the whole site. 

If you are thinking of adding an extra stylesheet up per page, make sure you have a global stylesheet with all your common styles as well as the stylesheet for that page. Do not duplicate styles and stylesheets as this is against DRY principles. Ideally you would be using a CSS Preprocessor like Sass to help you manage your CSS, but we'll get to that in later courses.
