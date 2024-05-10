import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { cn } from "../lib/utils";

type Props = {
    title: string;
    icon?: any;
    type?: "default" | "outline";
    onPress: () => void;
    styleContainer?: string;
};

export const Button = ({
    title,
    icon,
    type = "default",
    styleContainer,
    onPress,
}: Props) => {
    return (
        <TouchableOpacity
            className={cn(
                "py-3 px-6 flex-row items-center justify-center self-start bg-secondary rounded-md",
                type === "outline" && "bg-transparent border-2 border-gray-100",
                styleContainer
            )}
            onPress={onPress}
            activeOpacity={0.9}
        >
            <Text className="font-psemibold text-white text-sm capitalize">
                {title}
            </Text>
        </TouchableOpacity>
    );
};
