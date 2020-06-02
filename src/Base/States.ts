import { RouterUrls, StateDefinition } from "./AppStates";
import Home from "../UI/Home/Home";

type AppStatesType = { [url in RouterUrls]: StateDefinition }

export const AppStates: AppStatesType = {
	[RouterUrls.Home]: { component: Home },
};
