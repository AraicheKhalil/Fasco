import { NextApiResponse } from "next";

export async function GET(res:NextApiResponse){
    res.status(200).json({"name": "khalil"})
}


