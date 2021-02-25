export const NEXT_PAGE = 'USERS/NEXT_PAGE';
export const PREV_PAGE = 'USERS/PREV_PAGE';

export const goNextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const goPrevPage = () => {
  return {
    type: PREV_PAGE,
  };
};