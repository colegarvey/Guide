import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../components/home/welcome/welcome.style";

const App = () => {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    

    return (

        <SafeAreaView style={{flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right}}>

            { 0 ? (
            <>
                <Stack.Screen component={Popularjobs} options={{title: 'Popular Jobs'}}/>
                <ScrollView></ScrollView>
            </>
            ) : (
            <>
                <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.filter} dimension='60%'/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension='100%'/>
                    ),
                    headerTitle: ""
                    }}
                />

                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome/>
                </View>
            </>

            )}


        </SafeAreaView>

    )
        
}

export default App;