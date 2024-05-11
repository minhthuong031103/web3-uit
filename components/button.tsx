import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { cn } from "../lib/utils";

type Props = {
    title: string;
    icon?: any;
    type?: "default" | "outline";
    onPress: () => void;
    styleContainer?: string;
    styleText?: string;
};

export const Button = ({
    title,
    icon,
    type = "default",
    styleContainer,
    styleText,
    onPress,
}: Props) => {
    return (
        <TouchableOpacity
            className={cn(
                "py-3 px-6 flex-row items-center justify-between self-start bg-secondary rounded-md",
                type === "outline" && "bg-transparent border-2 border-gray-100",
                icon && "px-4",
                styleContainer
            )}
            onPress={onPress}
            activeOpacity={0.9}
        >
            <Text
                className={cn(
                    "font-psemibold text-white text-sm capitalize",
                    icon && "mr-1",
                    styleText
                )}
            >
                {title}
            </Text>
            {icon}
        </TouchableOpacity>
    );
};
