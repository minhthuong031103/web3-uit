import { Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

type TabIconProps = {
    name: string;
    color: string;
    focused: boolean;
};
const TabIcon = ({ name, color, focused }: TabIconProps) => {
    return <View>{name}</View>;
};

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#1D9BF0",
                    tabBarInactiveTintColor: "#AAB8C2",
                    tabBarStyle: {
                        backgroundColor: "#253341",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 69,
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "",
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <Entypo name="home" size={24} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        title: "",
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <Octicons name="search" size={24} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="stats"
                    options={{
                        title: "",
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                name="stats-chart"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "",
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                name="person-circle-outline"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
};

export default TabsLayout;
