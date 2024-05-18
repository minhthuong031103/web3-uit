import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { images } from "../constants";
import { Avatar } from "./avatar";
import { Balance } from "./balance";

type Props = {};

export const Card = ({}: Props) => {
    const [liked, setLiked] = useState(false);
    return (
        <View className=" relative bg-secondary p-4 rounded-[10px] self-start min-w-[270px] ">
            <Image
                // source={{
                //     uri: ""
                // }}
                source={images.nft}
                className="w-[235px] h-[259px] object-cover rounded-[10px]"
            />
            <View className="absolute top-6 left-6 right-7 flex-row items-center justify-between ">
                <View className="py-1 px-4 bg-[#313b4580] rounded">
                    <Text className="font-pregular text-white text-sm">
                        Art
                    </Text>
                </View>
                <AntDesign
                    name={liked ? "heart" : "hearto"}
                    size={24}
                    color={liked ? "#F26666" : "#253341"}
                    onPress={() => setLiked(!liked)}
                />
            </View>
            <View className="mt-6 space-y-4">
                <View className="flex-row items-center justify-between">
                    <Text className="font-pmedium text-base text-white">
                        Mosu 1930
                    </Text>
                    <View className="flex-row items-center">
                        <AntDesign
                            name="clockcircleo"
                            size={12}
                            color="#AAB8C2"
                        />
                        <Text className="font-pregular text-sm text-gray-100 ml-1">
                            102d Left
                        </Text>
                    </View>
                </View>
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center ">
                        <Avatar imageURL="" imageStyle="w-8 h-8" popular />
                        <Text className="font-plight text-xs text-white ml-2">
                            Karafuru
                        </Text>
                    </View>
                    <Balance
                        text="2,75 ETH"
                        styleContainer=" border-primary px-3"
                        styleText="font-pregular text-sm "
                        sizeIcon={14}
                    />
                </View>
            </View>
        </View>
    );
};
