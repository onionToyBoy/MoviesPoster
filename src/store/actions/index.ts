import {
  CHANGE_ERROR_STATUS,
  CHANGE_LOADING_STATUS,
  SEARCH_FILMS,
  SET_FILM_DESCRIPTION,
  LOAD_DATA,
} from '../../constants/types';

export const changeErrorStatus = (status: boolean) => {
  return {
    type: CHANGE_ERROR_STATUS,
    payload: status,
  };
};

export const changeLoadingStatus = (status: boolean) => {
  return {
    type: CHANGE_LOADING_STATUS,
    payload: status,
  };
};

export const loadData = (searchValue:string='') => {
  return {
    type: LOAD_DATA,
    payload: searchValue
  };
};

export const setFilmDescription = (film: Object) => {
  return {
    type: SET_FILM_DESCRIPTION,
    payload: film,
  };
};

export const searchFilms = (films: any) => {
  return {
    type: SEARCH_FILMS,
    payload: films,
  };
};
