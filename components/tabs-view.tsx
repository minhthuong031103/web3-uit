import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { cn } from "../lib/utils";

type Props = {
    labels: string[];
    active: string;
    onChange: (label: string) => void;
    containerStyle?: string;
};
const TabsView = ({ labels, active, onChange, containerStyle }: Props) => {
    return (
        <View
            className={cn(
                "flex-row border-b-2 border-secondary mt-6 justify-center",
                containerStyle
            )}
        >
            {labels.map((label) => (
                <TouchableOpacity
                    key={label}
                    className={cn(
                        "px-2 pb-1 flex-1",
                        active === label && "border-b-2 border-primary"
                    )}
                    activeOpacity={0.9}
                    onPress={() => onChange(label)}
                >
                    <Text
                        className={cn(
                            "font-pbold text-2xl text-gray-100 text-center",
                            active === label && "text-white"
                        )}
                    >
                        {label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default TabsView;
