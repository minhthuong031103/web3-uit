import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { cn } from "../lib/utils";

type Props = {
    styleContainer?: string;
    styleText?: string;
    sizeIcon?: number;
    text: string;
};

export const Balance = ({
    styleContainer,
    styleText,
    sizeIcon = 18,
    text,
}: Props) => {
    return (
        <View
            className={cn(
                "flex-row items-center justify-between px-3 py-2 rounded-lg border border-gray-100",
                styleContainer
            )}
        >
            <FontAwesome5 name="ethereum" size={sizeIcon} color="#C1CCF7" />
            <Text
                className={cn(
                    " ml-3 font-pbold text-base text-white",
                    styleText
                )}
            >
                {text}
            </Text>
        </View>
    );
};
