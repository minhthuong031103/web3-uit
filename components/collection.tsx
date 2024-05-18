import React from "react";
import { Image, Text, View } from "react-native";
import { images } from "../constants";

const Collection = () => {
    return (
        <View className="rounded-[10px]">
            <Image
                source={images.nft}
                className="w-full h-[46px] object-cover rounded-t-[10px]"
            />

            <Image source={images.avatar} className="w-10 h-10 rounded-full" />
            <Text className="font-pregular text-sm text-white mt-6 text-center">
                Ghozali One Day
            </Text>
        </View>
    );
};

export default Collection;
