import axios, { AxiosResponse } from "axios"
import { ITimeFrame } from "./types";

const instance = axios.create({
     baseURL: "http://localhost:5002/time-tracker/"
})
export const getAll = async (args:Partial<ITimeFrame>):Promise<AxiosResponse | undefined> => {
    const {timeframe} = args;

    try {
        const response = await instance.get("/",{
            params:{timeframe}
        })

        return response
    } catch (error) {
        if (axios.isAxiosError(error)){
            return error.response
        } else {
            console.error("Unexpected error:", error)
            throw error
        }
    }
}