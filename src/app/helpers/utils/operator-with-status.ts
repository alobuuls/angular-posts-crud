import { catchError, interval, map, merge, Observable, of, shareReplay, startWith, take, takeUntil } from 'rxjs';
import { DataState, IApiResp, IErrResp, LOADING_MESSAGES, LoadingMsg } from 'src/app/interfaces/data-structure-apis';
import { ErrorHandlerService } from 'src/app/services/errHandler.service';

// Factories de estado — mantienen la forma de DataState consistente en todo el helper
const loadingState = <T>(loadingMsg?: LoadingMsg): DataState<T> => ({
  data: null,
  status: 'loading',
  error: null,
  loadingMsg,
});

const successState = <T>(data: T): DataState<T> => ({
  data,
  status: 'success',
  error: null,
});

const errorState = <T>(error: IErrResp): DataState<T> => ({
  data: null,
  status: 'error',
  error,
});

export const initDataHelper = <T>(obs$: Observable<IApiResp<T>>, errH?: ErrorHandlerService, timeToChangeWord?: number): Observable<DataState<T>> => {
  const request$ = obs$.pipe(
    map((res: IApiResp<T>) => successState(res.data)),
    catchError(err => of(errorState<T>(errH ? errH.handle(err) : err))),
    shareReplay({ bufferSize: 1, refCount: true }) // shareReplay evita que loading$ y merge lancen dos peticiones HTTP por tener dos suscriptores
  );

  const loading$ = createLoadingStream<T>(request$, timeToChangeWord);
  return merge(loading$, request$);
};

const createLoadingStream = <T>(stop$: Observable<unknown>, timeToChangeWord: number = 1500): Observable<DataState<T>> =>
  interval(timeToChangeWord).pipe(
    // -1 para no repetir LOADING_MESSAGES[0], que ya fue emitido por el of() en merge
    take(LOADING_MESSAGES.length - 1),
    // index 0 → mensaje [1], index 1 → mensaje [2], etc. (el [0] ya fue emitido)
    map(index => loadingState<T>(LOADING_MESSAGES[index + 1])),
    startWith(loadingState<T>(LOADING_MESSAGES[0])),
    // cancela el intervalo en cuanto request$ emite, sin necesidad de Subject manual
    takeUntil(stop$)
  );
