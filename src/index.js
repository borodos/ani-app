import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserStore from "./stores/UserStore";
import NeededsStore from "./stores/NeededsStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Context.Provider
			value={{
				userStore: new UserStore(),
				neededsStore: new NeededsStore(),
			}}
		>
			<App />
		</Context.Provider>
	</React.StrictMode>
);

reportWebVitals();
