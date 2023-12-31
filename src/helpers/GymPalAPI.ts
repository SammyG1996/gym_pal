import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { apiUrl } from "../config/ApiUrl";
import { CredentialResponse } from "@react-oauth/google";

export class GymPalAPI {
    static token:string | null;
    static bearer_token_req:AxiosRequestConfig | undefined;
    static user: object | null

    static async post<T>(urlPath:string, data = {}, validationNeeded = false): Promise<T | null> {
        try {
            // This conditional decides whether to include validation or not.
            const res = validationNeeded ? await axios.post(`${apiUrl}${urlPath}`, data, this.bearer_token_req) : await axios.post(`${apiUrl}${urlPath}`, data);
            return res as T; // Explicitly cast to type T
        } catch (error) {
            console.log(error)
            return error as T
        }
    }



    static async login(inputData:{}){
        try {
            const res = await this.post<AxiosResponse | null>(`/auth/token`, inputData);
            if (!res) throw new Error();
            console.log(res)
            this.token = res.data.token;
            this.bearer_token_req = {
                headers: { 
                    Authorization: `Bearer ${this.token}`
                }
            };
            this.user = res.data.user;
            return res.data;
        } catch (error) {
            // Handle errors here
            console.error(error);
            return undefined;
        }
    }  


    static async loginOAuth(jwtToken:CredentialResponse){
        try {
            const res = await this.post<AxiosResponse | null>(`/auth/oauth`, jwtToken)
            if(!res) throw new Error();
            this.token = res.data.token
            this.bearer_token_req = {
                headers: { 
                    Authorization: `Bearer ${this.token}`
                }
            }
            this.user = res.data.user;

            return res.data
        } catch (error) {
            return console.log(error)
        }

    }


    static async createUser(username:string, firstName:string, lastName:string, email:string, password:string){
        const data = {username, firstName, lastName, email, password}    
        const res:{name:string, status:number, response: {data:{error:{message:string | string[]}} }} | null = await this.post(`/auth/register`, data)
        return res
    }


}