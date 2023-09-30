import { View, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function Home(){
    const router = useRouter();

    function onSubmit(){
        router.push("/todo")
    }

    return (
        <View>
            <Button 
                onPress={onSubmit}
                title="Go to Todo">
            </Button>
            <Link href="/todo">Go to Todo</Link>
        </View>
    )
}
