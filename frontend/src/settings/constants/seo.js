import last from "lodash/last";
import capitalize from "lodash/capitalize";
import T from "T";
import routes from "router/routes";
import system from "settings/system";

import matchPathWithParams from "./matchPathWithParams";
const { title: systemTitle } = system;
const allRoutes = Object.keys(routes.app);

const PAGE_TITLE = new Map([
    [routes.app.creator, T.CREATOR],
    [routes.app.listener, T.LISTENER],
    [routes.app.login, T.LOGIN],
    ["default", T.ERROR_PAGE],
  ]);

  const getPageTitle = (page) => {
    const result = Object.values(routes.app).find((path) => path && matchPathWithParams(page, path));
    let title = PAGE_TITLE.get(result);
    if (!title) {
      title = allRoutes.includes(last(page.split("/"))) ? capitalize(last(page.split("/"))) : PAGE_TITLE.get("default");
    }
    return `${systemTitle} - ${title}`;
  };
  
  export default getPageTitle;