import { createReducer, on } from '@ngrx/store';
import { SendForm } from './rca.actions';
import { RcaForm } from '../rca-form.models';

export interface RcaFormState {
	RcaForms: Array<RcaForm>;
}

export const initialState: RcaFormState = {
	RcaForms: []
};

export const sendForm = (state: RcaFormState, action: any) => {
	return {
		...state,
		RcaForms: [...state.RcaForms, action.rcaForm]
	};
};

export const rcaReducer = createReducer(
    initialState, 
    on(SendForm, sendForm)
    );
