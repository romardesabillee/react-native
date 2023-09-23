import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Home(){
    const [state, setState] = useState();

    useEffect(() => {
        console.log(state);
    }, [state]);

    function handleOnChangeText(text){
        setState(text);
    }

    function handleLoginClicked(){
    }

    return (
        <View>
            <Link href="/react-hook-form">Next Page </Link>
            <Text>{state}</Text>
            <Text>Login your account</Text>
            <View>
                <Text>Email:</Text>
                <TextInput 
                    onChangeText={handleOnChangeText}
                    keyboardType="email-address"
                    placeholder=""/>
            </View>
            <View>
                <Text>Password:</Text>
                <TextInput 
                    secureTextEntry={true}
                    placeholder="Enter your password"/>
            </View>
            <Button 
                onPress={handleLoginClicked} 
                title="Sign In">
            </Button>
        </View>
    )
}
