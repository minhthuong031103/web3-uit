import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "../../components/avatar";
import { Balance } from "../../components/balance";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import Collection from "../../components/home/collection";

const Home = () => {
    const [title, setTitle] = useState<string>("Trending");

    const titles = ["Trending", "Art", "Gaming"];
    const collections = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const trending = [{ id: 1 }, { id: 2 }, { id: 3 }];

    return (
        <SafeAreaView className="flex-1 bg-dark px-6 py-8">
            <ScrollView>
                <StatusBar style="light" />
                <View className="flex-row justify-between items-center">
                    <Balance text="26,031" />
                    <Avatar imageURL="" imageStyle="w-[52px] h-[52px]" />
                </View>

                <View
                    className="mt-8 flex-row"
                    style={{
                        columnGap: 16,
                    }}
                >
                    {titles.map((t) => (
                        <Button
                            key={t}
                            title={t}
                            onPress={() => {
                                setTitle(t);
                            }}
                            styleContainer={t === title ? "bg-primary" : ""}
                        />
                    ))}
                </View>

                <FlatList
                    nestedScrollEnabled
                    horizontal
                    data={collections}
                    renderItem={({ item }) => <Card key={item.id} />}
                    style={{
                        marginTop: 32,
                    }}
                    contentContainerStyle={{
                        columnGap: 16,
                    }}
                />

                <FlatList
                    nestedScrollEnabled
                    data={trending}
                    renderItem={({ item }) => <Collection key={item.id} />}
                    style={{
                        marginTop: 40,
                    }}
                    ListHeaderComponent={() => (
                        <Text className="font-pbold text-2xl text-white">
                            Trending Collections
                        </Text>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
