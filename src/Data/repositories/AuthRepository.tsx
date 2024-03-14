import axios, { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/remote/api/models/ResponseApiDelivery";

export class AuthRepositoryImpl implements AuthRepository {
  async register(user: User): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>('/users/create', user);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ResponseApiDelivery>;
        if (axiosError.response) {
          console.log('Error de respuesta:', axiosError.response.data);
          return axiosError.response.data;
        } else {
          console.error('Error inesperado de Axios:', axiosError);
          return Promise.reject('Se produjo un error inesperado.');
        }
      } else {
        console.error('Error inesperado:', error);
        return Promise.reject('Se produjo un error inesperado.');
      }
    }
  }

  async login(email: string, password: string): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>('/users/login', {
        email: email,
        password: password
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ResponseApiDelivery>;
        if (axiosError.response) {
          console.log('Error de respuesta:', axiosError.response.data);
          return axiosError.response.data;
        } else {
          console.error('Error inesperado de Axios:', axiosError);
          return Promise.reject('Se produjo un error inesperado.');
        }
      } else {
        console.error('Error inesperado:', error);
        return Promise.reject('Se produjo un error inesperado.');
      }
    }
  }
}
