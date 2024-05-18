import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { cn } from "../lib/utils";
import { Avatar } from "./avatar";

type Props = {
    index: number;
};

export const RankingCollect = ({ index }: Props) => {
    return (
        <View className="p-3 rounded-[10px] bg-secondary mb-4">
            <View className="flex-row items-center">
                <Text className="font-pmedium text-base text-white mr-2">
                    {`0${index + 1}`.slice(-2)}
                </Text>
                <Avatar imageURL="" imageStyle="w-[45px] h-[45px] " popular />
                <Text className="font-pregular text-white text-sm ml-2 ">
                    Cryptopunks
                </Text>

                <View className="ml-auto">
                    <View>
                        <View className="flex-row items-center">
                            <FontAwesome5
                                name="ethereum"
                                size={16}
                                color="#C1CCF7"
                            />
                            <Text className="font-pregular text-xs text-white ml-1">
                                4,218
                            </Text>
                        </View>
                        <Text
                            className={cn(
                                "mt-2 font-plight text-xs text-success"
                            )}
                        >
                            +23,00%
                        </Text>
                    </View>
                </View>
            </View>

            <View className="flex-row items-center justify-around mt-4">
                <Item description="24h%" title="11,3%" status="success" />
                <Item
                    description="Floor Price"
                    title="96,68"
                    icon={
                        <FontAwesome5
                            name="ethereum"
                            size={16}
                            color="#C1CCF7"
                        />
                    }
                />
                <Item description="24h%" title="11,3%" status="success" />
                <Item description="24h%" title="11,3%" status="success" />
            </View>
        </View>
    );
};

type ItemProps = {
    title: string;
    description: string;
    status?: "success" | "danger";
    icon?: any;
};

const Item = ({ title, description, icon, status }: ItemProps) => {
    return (
        <View className="items-center">
            <Text className="font-plight text-xs text-gray-100">
                {description}
            </Text>
            <View className="flex-row items-center">
                {icon}
                <Text
                    className={cn(
                        "font-pregular text-sm text-white",
                        status === "success" && "text-success",
                        status === "danger" && "text-danger",
                        icon && "ml-1"
                    )}
                >
                    {title}
                </Text>
            </View>
        </View>
    );
};
