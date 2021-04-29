/**
 * @author Tanya Vykliuk <tanya.vykliuk@gmail.com>
 */
import { Dispatch } from 'redux';
import { dispatchAlertError } from '../../../common/reducers/alert/service';
import {
  changeCreatorPage,
  changeCreatorForm,
  changeFeedPage,
  changeArMedia,
  changeNewFeedPage,
  changeShareForm
} from './actions';

export function updateCreatorPageState(state: boolean, id?:string) {
  return async (dispatch: Dispatch, getState: any): Promise<any> => {
    try {
      dispatch(changeCreatorPage(state, id || null));      
    } catch (err) {
      console.log(err);
      dispatchAlertError(dispatch, err.message);
    }
  };
}

export function updateCreatorFormState(state: boolean) {
  return async (dispatch: Dispatch, getState: any): Promise<any> => {
    try {
      dispatch(changeCreatorForm(state));      
    } catch (err) {
      console.log(err);
      dispatchAlertError(dispatch, err.message);
    }
  };
}

export function updateFeedPageState(state: boolean, id?:string) {
  return async (dispatch: Dispatch, getState: any): Promise<any> => {
    try {
      dispatch(changeFeedPage(state, id || null));      
    } catch (err) {
      console.log(err);
      dispatchAlertError(dispatch, err.message);
    }
  };  
}

export function updateNewFeedPageState(state: boolean) {
  return async (dispatch: Dispatch, getState: any): Promise<any> => {
    try {
      dispatch(changeNewFeedPage(state));      
    } catch (err) {
      console.log(err);
      dispatchAlertError(dispatch, err.message);
    }
  };  
}

export function updateShareFormState(state: boolean) {
  return async (dispatch: Dispatch, getState: any): Promise<any> => {
    try {
      dispatch(changeShareForm(state));      
    } catch (err) {
      console.log(err);
      dispatchAlertError(dispatch, err.message);
    }
  };  
}


export function updateArMediaState(state: boolean) {
  return async (dispatch: Dispatch, getState: any): Promise<any> => {
    try {
      dispatch(changeArMedia(state));      
    } catch (err) {
      console.log(err);
      dispatchAlertError(dispatch, err.message);
    }
  };
}