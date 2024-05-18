import { Feather, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

export const Input = () => {
    const [text, setText] = useState("");

    const handleSearch = () => {};

    return (
        <View className="h-[56px] w-full rounded-[10px] bg-secondary flex-row items-center py-4 px-5">
            <TouchableOpacity className="mr-4 w-6 h-6" onPress={handleSearch}>
                <Feather name="search" size={24} color="#AAB8C2" />
            </TouchableOpacity>
            <TextInput
                className=" font-pmedium text-base text-white flex-1 h-[56px] pt-1 "
                value={text}
                onChangeText={setText}
                placeholder="Search your NFT..."
                placeholderTextColor="#AAB8C2"
            />
            <TouchableOpacity
                className="w-6 h-6 ml-4"
                onPress={() => setText("")}
            >
                <FontAwesome5 name="times" size={24} color="#AAB8C2" />
            </TouchableOpacity>
        </View>
    );
};
