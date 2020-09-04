import { Splash } from "../UI/Splash/Splash";
import { Home } from "../UI/Home/Home";

export enum RouteUrls {
	Splash = "/",
	Home = "/home",
}

export const RouteDefinitions: { [key in RouteUrls]: React.ComponentClass<any> } = {
	[RouteUrls.Splash]: Splash,
	[RouteUrls.Home]: Home,
};
