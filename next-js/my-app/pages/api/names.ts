/* API routes work basically the same in as the pages in terms of creating the 
 * nested routes. Recall, API routes are async functions that take two parameters,
 * NextApiRequest and NextApiResponse, and return a NextApiResponse object and JSON data. 
 * Also, observe the use of .ts since we're returning a function instead of JSX code */

import type { NextApiRequest, NextApiResponse } from "next";

/* The type that will be used to store the returned JSON data */
type responseItemType = {
    id: string, 
    name: string;
};

/* Export the async function that fetches the JSON data located at the given url */
export default async function handler (req: NextApiRequest, res: NextApiResponse)
    : Promise<NextApiResponse<responseItemType[]> | void> {
        const url = "https://www.usemodernfullstack.dev/api/v1/users";
        let data; 
        try {
            const response = await fetch(url);
            data = (await response.json() as responseItemType[]);   // Convert the json data to be an array of responseItemType
        } catch (err) {
            return res.status(500);    /* No content and return a generic status code of 500 = Internal Server Error */
        }

        /* Parse the array to get each element's id and name to create an array of objects */
        const names = data.map((item) => {
            return {id: item.id, name: item.name};
        });
        
        /* Return the response with the JSON data attached */
        return res.status(200).json(names);
}