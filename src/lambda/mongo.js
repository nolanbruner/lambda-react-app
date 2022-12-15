
import dotenv from "dotenv"
dotenv.config()


// const { MongoClient } = require("mongodb");

// const mongoClient = new MongoClient(process.env.URI);

// const clientPromise = mongoClient.connect();

// const handler = async (event) => {
//     try {
//         const database = (await clientPromise).db(process.env.DB);
//         const collection = database.collection(process.env.COLLECTION);
//         const results = await collection.find({}).limit(1).toArray();
//         return {
//             statusCode: 200,
//             body: JSON.stringify({ msg: results })
//         };
//     } catch (error) {
//         return { statusCode: 500, body: error.toString() }
//     }
// }

// module.exports = { handler }


import axios from "axios"
export async function handler(event, context) {
    const web = process.env.MONGO_ENDPOINT
    console.log(web)
    console.log("hi")
    try {
        const response = await axios.get(process.env.MONGO_ENDPOINT, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': ' *',
                'api-key': process.env.KEY,
            }
        })
        const data = response.data

        return {
            statusCode: 200,
            body: JSON.stringify({ msg: data[0].quote })
        };
    } catch (err) {
        console.log(err) // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: "NO MESSAGE" }) // Could be a custom message or object i.e. JSON.stringify(err)
        }
    }
}