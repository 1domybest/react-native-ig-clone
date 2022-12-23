import {Provider} from "react-redux";
import store from "./store";
import AuthNavigaitor from './src/navigations/AuthNavigaiton'
import { SafeAreaView } from "react-native";
export default function App() {
    return (
        <Provider store={store}>
            <AuthNavigaitor/>
        </Provider>
    );
}
