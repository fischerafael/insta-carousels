import Router from "next/router";

export const handleNavigateTo = (url: string): void => {
  Router.push(url);
};
