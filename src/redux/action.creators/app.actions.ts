import * as actions from '../action.constants/app.constants';
import {FETCH_DISTRIBUTORS} from '../action.constants/app.constants';
import {IStateRecord} from "../module.interfaces/app.interface";
import Model from "../../types/Model";
import Region from "../../types/Region";
import Message from "../../types/Message";

export const changeControls = (payload: { name: keyof IStateRecord, value: any }): { type: typeof actions.CHANGE_CONTROLS, payload: { name: keyof IStateRecord, value: any } } => ({
  type: actions.CHANGE_CONTROLS,
  payload
});

export const changeControlsSuccess = (payload: { name: keyof IStateRecord, value: any }): { type: typeof actions.CHANGE_CONTROLS_SUCCESS, payload: { name: keyof IStateRecord, value: any } } => ({
  type: actions.CHANGE_CONTROLS_SUCCESS,
  payload
});

export const searchRequest = (): { type: typeof actions.SEARCH_REQUEST } => ({
  type: actions.SEARCH_REQUEST
});

export const searchSuccess = (matches: Model[]): { type: typeof actions.SEARCH_SUCCESS, matches: Model[] } => ({
  type: actions.SEARCH_SUCCESS,
  matches
});

export const gsaRequest = (): { type: typeof actions.GSA_REQUEST } => ({
  type: actions.GSA_REQUEST
});

export const gsaSuccess = (response: Model[]): { type: typeof actions.GSA_SUCCESS, response: Model[] } => ({
  type: actions.GSA_SUCCESS,
  response
});

export const fetchAssets = (uuid: string[], key: keyof IStateRecord, constructor: { class: any }): { type: typeof actions.FETCH_ASSETS, uuid: string[], key: keyof IStateRecord, constructor: { class: any } } => ({
  type: actions.FETCH_ASSETS,
  uuid,
  key,
  constructor
});

export const fetchAssetsRequest = (): { type: typeof actions.FETCH_ASSETS_REQUEST } => ({
  type: actions.FETCH_ASSETS_REQUEST
});

export const fetchAssetsSuccess = (payload: { name: keyof IStateRecord, value: any }): { type: typeof actions.FETCH_ASSETS_SUCCESS, payload: { name: keyof IStateRecord, value: any } } => ({
  type: actions.FETCH_ASSETS_SUCCESS,
  payload
});

export const fetchAssetsFailure = (error: string): { type: typeof actions.FETCH_ASSETS_FAILURE, error: string } => ({
  type: actions.FETCH_ASSETS_FAILURE,
  error
});

export const fetchDistributors = (): {type: typeof actions.FETCH_DISTRIBUTORS} => ({
  type: FETCH_DISTRIBUTORS
});

export const fetchDistributorsRequest = (): {type: typeof actions.FETCH_DISTRIBUTORS_REQUEST} => ({
  type: actions.FETCH_DISTRIBUTORS_REQUEST,
});

export const fetchDistributorsSuccess = (regions: Region[]): {type: typeof actions.FETCH_DISTRIBUTORS_SUCCESS, regions: Region[]} => ({
  type: actions.FETCH_DISTRIBUTORS_SUCCESS,
  regions
});

export const fetchDistributorsFailure = (error: string): {type: typeof actions.FETCH_DISTRIBUTORS_FAILURE, error: string} => ({
  type: actions.FETCH_DISTRIBUTORS_FAILURE,
  error
});

export const sendMail = (publication: Message): {type: typeof actions.SEND_MAIL, publication: Message} => ({
  type: actions.SEND_MAIL,
  publication
});

export const sendMailRequest = (): {type: typeof actions.SEND_MAIL_REQUEST} => ({
  type: actions.SEND_MAIL_REQUEST,
});

export const sendMailSuccess = (): {type: typeof actions.SEND_MAIL_SUCCESS} => ({
  type: actions.SEND_MAIL_SUCCESS,
});


export const sendMailFailure = (error: string): {type: typeof actions.SEND_MAIL_FAILURE, error: string} => ({
  type: actions.SEND_MAIL_FAILURE,
  error
});