import { View, Text, TextInput } from "react-native";

export default function LabelTextInput(props){
    const { label, ...others } = props;

    return (
        <View>
            <Text>{label}:</Text>
            <TextInput {...others}/>
        </View>
    )
}
