import * as actions from '../action.constants/app.constants';
import {IStateRecord} from "../module.interfaces/app.interface";

export const changeControls = (payload: { name: keyof IStateRecord, value: any }): { type: typeof actions.CHANGE_CONTROLS, payload: { name: keyof IStateRecord, value: any } } => ({
  type: actions.CHANGE_CONTROLS,
  payload
});

export const changeControlsSuccess = (payload: { name: keyof IStateRecord, value: any }): { type: typeof actions.CHANGE_CONTROLS_SUCCESS, payload: { name: keyof IStateRecord, value: any } } => ({
  type: actions.CHANGE_CONTROLS_SUCCESS,
  payload
});

export const fetchLanding = (): {type: typeof actions.FETCH_LANDING} => ({
  type: actions.FETCH_LANDING
});

export const fetchLandingRequest = (): {type: typeof actions.FETCH_LANDING_REQUEST} => ({
  type: actions.FETCH_LANDING_REQUEST
});

export const fetchLandingSuccess = (payload: any): {type: typeof actions.FETCH_LANDING_SUCCESS, payload: any } => ({
  type: actions.FETCH_LANDING_SUCCESS,
  payload
});

export const fetchLandingFailure = (error: string): {type: typeof actions.FETCH_LANDING_FAILURE, error: string} => ({
  type: actions.FETCH_LANDING_FAILURE,
  error
});
