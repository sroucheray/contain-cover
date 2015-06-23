# Contains and cover methods

CSS provides two properties to fit an image inside its container : `background-size` for background images and `object-fit` for [replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element) (&lt;img&gt;, &lt;video&gt;, &lt;canvas&gt;, &lt;object&gt;...).

`contain` and `cover` are two possible values of these properties whose effects are described here [https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Scaling_background_images](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Scaling_background_images#contain)

This JavaScript module exports two functions `contain` and `cover`.

Given the sizes of an element and its parent:
* `contain` returns the size to be applied to the element to let it fits its parent, still being fully visible and keeping its apect ratio.
* `cover` returns the size to be applied to the element to let it fully fill its parent, keeping its aspect ratio and potentially overflowing vertically or horizontally.

As a bonus, `contain` and `cover` return the x and y positions of the element to center it in its parent container.

```javascript
import { contain, cover } from "contain-cover";

/*
Given an 50px 50px element in a 100px 200px parent
To be contains in its parent it must be of size 100px 100px and be positioned at 0px 50px to be centered.
*/
let { width, height, x, y } = contain(100, 200, 50, 50);
console.log(width, height, x, y);
//100 100 0 50


/*
Given an 50px 50px element in a 100px 200px parent
To be covered in its parent it must be of size 200px 200px and be positioned at -50px 0px to be centered.
*/
let { width, height, x, y } = cover(100, 200, 50, 50);
console.log(width, height, x, y);
//200 200 -50 0
```
