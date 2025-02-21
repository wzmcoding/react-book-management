import axios from "axios";

export interface CreateBook {
    name: string;
    author: string;
    description: string;
    cover: string;
}

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3003/',
    timeout: 3000
});

export async function register(username: string, password: string) {
    return await axiosInstance.post('/user/register', {
        username, password
    });
}

export async function login(username: string, password: string) {
    return await axiosInstance.post('/user/login', {
        username, password
    });
}

export async function list(name: string) {
    return await axiosInstance.get('/book/list', {
        params: {
            name
        }
    });
}

export async function create(book: CreateBook) {
    return await axiosInstance.post('/book/create', {
        name: book.name,
        author: book.author,
        description: book.description,
        cover: book.cover
    });
}