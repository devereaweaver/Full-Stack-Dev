/* A more optimized version of the sample Express server. In this 
 * iteration we define our routes in a separate module and use native
 * modules for importing */

// Import our routes as well as the Express module to build the server
import { routeHello, routeAPINames } from "./routes";