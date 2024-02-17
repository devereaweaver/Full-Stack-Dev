/* An example of creating the simplest kind of page route. 
 * With Next.js, we just need to put it in the pages folder. 
 * Next.js' routing technique automatically creates the apps' 
 * routes based on the files in the pages director. If a file in 
 * this folder exports a React component or an async function, it 
 * becomes a valid endpoint (either an HTML page or an API).
 */

/* In this example, we'll use the NextPage type and a function 
 * component to define the page's components. */
import type {NextPage} from "next";

const Hello: NextPage = () => {
    return (<>Hello World!</>);
}

/* Export our component, this also Next.js to serve this hoe up */
export default Hello;