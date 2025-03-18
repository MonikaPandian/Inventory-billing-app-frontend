import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (!GA_MEASUREMENT_ID) return;

  ReactGA.initialize(GA_MEASUREMENT_ID, { debug: true });

  // const userId = localStorage.getItem("userId");
  // if (userId) {
  ReactGA.set({ user_id: "1234567890" });
  // }
};

export const setUserId = (userId) => {
  if (userId) {
    ReactGA.set({ user_id: userId });
  }
};

export const logPageView = () => {
  // const userId = localStorage.getItem("userId");

  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    user_id: "1234567890",
  });
};

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};