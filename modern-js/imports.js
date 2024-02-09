/* An illustration of importing both named and default exports */

// Import default export: We import the default export by using the import 
// statement followed by the local name we assign it. The import also
// needs a reference to the file that contains the code. 
import getFoo from "./default_export.js";
getFoo();

// Import named export: Basically the same thing, we just need to use the 
// original names in {} and we can rename them later in the code. 
import { getFooBar, getBar, getBaz } from "./named_export.js";

// Rename the first function
var gfb = getFooBar;
gfb();

// Do I NEED to rename them?...nope doesn't appear so
getBar();

// See, now I don't understand the difference between named and default exports
// anymore...
var idk = getFoo;
idk();

/* Ohhh, one of the biggest differences is that you can only have ONE default 
 * export whereas you can have as many named exports as you'd like to. */

/* Also, it appears the point of exporting in general is that we can define our
 * functions in separate modules instead of defining them all in the one script
 * that will act as the primary script for the program...I think... */