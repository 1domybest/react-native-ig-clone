import {Provider} from "react-redux";
import store from "./store";
import { StyleSheet, Text, View } from 'react-native'
import AuthNavigaitor from './src/navigations/AuthNavigaiton'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { SafeAreaView } from "react-native";export default function App() {
    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <AuthNavigaitor/>
            </GestureHandlerRootView>
        </Provider>
    );
}