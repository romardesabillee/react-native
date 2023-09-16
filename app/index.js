import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        padding: 10
    },
    headerText: {
        textAlign: 'center'
    }
})

export default function Home(){
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.headerText}>Login your account</Text>
            <View>
                <Text>Email:</Text>
                <TextInput 
                    keyboardType="email-address"
                    placeholder="Enter your Email"/>
            </View>
            <View>
                <Text>Password:</Text>
                <TextInput 
                    placeholder="Enter your password"/>
            </View>
            <Button title="Sign In"></Button>
        </View>
    )
}
