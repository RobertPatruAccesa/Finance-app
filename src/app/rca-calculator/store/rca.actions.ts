import { createAction, props } from '@ngrx/store';

export const SendForm = createAction(
    '[RCA Page] Send form', 
    props<{ rcaForm: any }>()
    );
