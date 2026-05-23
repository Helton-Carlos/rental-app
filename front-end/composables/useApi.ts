import type { IApiResponse } from '@/utils/interface';

interface ApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export function useApi() {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase as string;

  async function request<T = unknown>(
    endpoint: string,
    options: ApiOptions = {},
  ): Promise<IApiResponse<T>> {
    const { method = 'GET', body, headers = {} } = options;

    try {
      const response = await fetch(`${baseURL}${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          data: null,
          error: data.error || 'Erro inesperado.',
          status: response.status,
        };
      }

      return { data: data as T, error: null, status: response.status };
    } catch {
      return {
        data: null,
        error: 'Não foi possível conectar ao servidor.',
        status: 0,
      };
    }
  }

  function get<T = unknown>(
    endpoint: string,
    options?: Omit<ApiOptions, 'method' | 'body'>,
  ) {
    return request<T>(endpoint, { ...options, method: 'GET' });
  }

  function post<T = unknown>(
    endpoint: string,
    body: Record<string, unknown>,
    options?: Omit<ApiOptions, 'method' | 'body'>,
  ) {
    return request<T>(endpoint, { ...options, method: 'POST', body });
  }

  function put<T = unknown>(
    endpoint: string,
    body: Record<string, unknown>,
    options?: Omit<ApiOptions, 'method' | 'body'>,
  ) {
    return request<T>(endpoint, { ...options, method: 'PUT', body });
  }

  function del<T = unknown>(
    endpoint: string,
    options?: Omit<ApiOptions, 'method' | 'body'>,
  ) {
    return request<T>(endpoint, { ...options, method: 'DELETE' });
  }

  return { get, post, put, del, request };
}
