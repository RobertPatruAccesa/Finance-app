import { createReducer, on } from '@ngrx/store';
import { SendForm } from './rca.actions';

export interface RcaFormState {
	RcaForms: Array<any>;
}

export const initialState: RcaFormState = {
	RcaForms: []
};

export const sendForm = (state: RcaFormState, action: { rcaForm: any }) => {
	return {
		...state,
		RcaForms: [...state.RcaForms, action]
	};
};

export const rcaReducer = createReducer(initialState, on(SendForm, sendForm));
