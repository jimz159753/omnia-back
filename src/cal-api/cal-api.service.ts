import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

@Injectable()
export class CalApiService {
  private client: AxiosInstance;

  constructor() {
    const config: AxiosRequestConfig = {
      baseURL: process.env.CAL_BASE_URL,
      headers: {
        Authorization: `Bearer ${process.env.CAL_BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      },
    };

    this.client = axios.create(config);
  }

  public async get<T = any>(
    endpoint: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.client.get(endpoint, config);
    return response.data;
  }

  public async post<T = any, D = any>(
    endpoint: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.client.post(
      endpoint,
      data,
      config,
    );
    return response.data;
  }

  public async put<T = any, D = any>(
    endpoint: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.client.put(
      endpoint,
      data,
      config,
    );
    return response.data;
  }

  public async patch<T = any, D = any>(
    endpoint: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.client.patch(
      endpoint,
      data,
      config,
    );
    return response.data;
  }

  public async delete<T = any>(
    endpoint: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.client.delete(
      endpoint,
      config,
    );
    return response.data;
  }
}
