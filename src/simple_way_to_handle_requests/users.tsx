import axios from "axios";
import { requestHandler } from "./requestHandler";

interface User {
    id: number,
    name: string
}

interface GetUserParams {
    limit?: number,
    page?: number
}

export const getUsers = requestHandler<GetUserParams, User[]>((params) => axios.get('/api/users', { params }))