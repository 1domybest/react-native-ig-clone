import {Provider} from "react-redux";
import store from "./store";
import MainNavigation from './src/screens/MainNavigation'
export default function App() {
    return (
        <Provider store={store}>
            <MainNavigation></MainNavigation>
        </Provider>
    );
}
