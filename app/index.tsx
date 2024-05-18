import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function App() {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-3xl font-semibold">NFT Marketplace</Text>
            <Link href="/home">Go to Home page</Link>
        </View>
    );
}
