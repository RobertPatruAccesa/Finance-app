import { createAction, props } from '@ngrx/store';
import { RcaForm } from '../rca-form.models';

export const SendForm = createAction(
    '[RCA Page] Send form', 
    props<{ rcaForm: RcaForm }>()
);
