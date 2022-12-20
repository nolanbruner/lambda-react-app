
import dotenv from "dotenv"
dotenv.config()
import axios from "axios"
export async function handler(event, context) {
    const web = process.env.MONGO_ENDPOINT
    // console.log(web)
    try {
        const response = await axios.get(process.env.MONGO_ENDPOINT, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': ' *',
                'api-key': process.env.KEY,
            }
        })
        const data = response.data
        console.log(data[0])
        return {
            statusCode: 200,
            body: JSON.stringify({ msg: data[0].quote, auth: data[0].author })
        };
    } catch (err) {
        console.log(err) // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: "NO MESSAGE" }) // Could be a custom message or object i.e. JSON.stringify(err)
        }
    }
}