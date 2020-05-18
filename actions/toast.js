export const SHOW_TOAST = "SHOW_TOAST";
export const HIDE_TOAST = "HIDE_TOAST";

export const showToast = (toast) => {
  return {
    type: SHOW_TOAST,
    toast,
  };
};

export const hideToast = () => {
  return {
    type: HIDE_TOAST,
  };
};
