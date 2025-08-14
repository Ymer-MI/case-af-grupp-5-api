import axios, { type AxiosInstance } from 'axios'

export class BaseService {
    private ax: AxiosInstance

    constructor(baseURL: string) { this.ax = axios.create({ baseURL }) }

    private checkEndPointStr = (str: string) => `${str.charAt(0) !== '/' ? `/${str}` : str}`

    private checkQuery = (str?: string) => str ?? ''

    private buildEndPoint = (endPoint: string, query?: string) => `${this.checkEndPointStr(endPoint)}${this.checkQuery(query)}`

    public get = async <T>(endpoint: string, {query, params}: {query?: string, params?: object} = {}) => (await this.ax.get<T>(this.buildEndPoint(endpoint, query), { params })).data
}