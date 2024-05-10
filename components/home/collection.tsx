import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { cn } from "../../lib/utils";
import { Avatar } from "../avatar";

const Collection = () => {
    return (
        <View className="mt-4 flex-row items-center justify-between">
            <View className="flex-row items-center">
                <Avatar
                    imageURL=""
                    imageStyle="w-[66px] h-[66px]"
                    popular
                    iconSize={24}
                />
                <View className="ml-4">
                    <Text className="font-pmedium text-base text-white">
                        Ghozali Everyday
                    </Text>
                    <Text className="mt-1 font-pregular text-xs text-gray-100">
                        Ghozali_Ghozalu
                    </Text>
                </View>
            </View>
            <View>
                <View className="flex-row items-center">
                    <FontAwesome5 name="ethereum" size={18} color="#C1CCF7" />
                    <Text className="font-psemibold text-sm text-white ml-1">
                        4,218
                    </Text>
                </View>
                <Text className={cn("mt-2 font-pregular text-xs text-success")}>
                    +23,00%
                </Text>
            </View>
        </View>
    );
};

export default Collection;
