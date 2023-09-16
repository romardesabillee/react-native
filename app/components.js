import { View, Text } from "react-native";
import LabelTextInput from "../components/LabelTextInput";

export default function Components(){
    return (
        <View>
            <LabelTextInput
                label="Email"
                keyboardType="email-address"
                placeholder="Enter your Email">
            </LabelTextInput>

            <LabelTextInput
                label="Password"
                placeholder="Enter your Password">
            </LabelTextInput>
        </View>
    )
}
