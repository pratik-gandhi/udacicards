export const SHOW_TOAST = "SHOW_TOAST";
export const HIDE_TOAST = "HIDE_TOAST";

export const showToast = (text) => {
  return {
    type: SHOW_TOAST,
    text,
  };
};

export const hideToast = () => {
  return {
    type: HIDE_TOAST,
  };
};
