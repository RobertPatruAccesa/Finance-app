import { createAction, props } from '@ngrx/store';

// export interface RcaForm  {
    

// }

export const SendForm = createAction('[RCA Page] Send form', props<{ rcaForm: any }>());
