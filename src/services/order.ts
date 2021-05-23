import cache from 'helpers/rxjs-operators/cache';
import IOrder from 'interfaces/models/order';
import IOrderRole from 'interfaces/models/userRole';
import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import { Observable, of } from 'rxjs';

import apiService, { ApiService } from './api';

export class OrderService {
  constructor(private apiService: ApiService) { }

  public list(params: IPaginationParams): Observable<IPaginationResponse<IOrder>> {
    return of(
      {
        total: 1,
        page: 1,
        pageSize: 1,
        results:
          [
            {
              id: 1,
              description: 'Salgado',
              value: '500',
              quantity: '2'
            },
            {
              id: 2,
              description: 'Suco',
              value: '10',
              quantity: '1'
            }
          ]
      }
    );
  }

  public current(): Observable<IOrder> {
    return this.apiService.get('/user/current');
  }

  public roles(refresh: boolean = false): Observable<IOrderRole[]> {
    return this.apiService.get('/user/roles').pipe(cache('user-service-roles', { refresh }));
  }

  public save(model: Partial<IOrder>): Observable<IOrder> {
    return this.apiService.post('/user', model);
  }

  public delete(id: number): Observable<void> {
    return this.apiService.delete(`/user/${id}`);
  }
}

const orderService = new OrderService(apiService);
export default orderService;
