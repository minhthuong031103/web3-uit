import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatGrid } from "react-native-super-grid";
import Collection from "../../components/collection";
import { Input } from "../../components/search";

const Search = () => {
    const [category, setCategory] = useState("Art");
    const categories = ["Art", "Gaming", "Music"];
    const collections = [{ id: 1 }, { id: 2 }, { id: 3 }];

    return (
        <SafeAreaView className="bg-dark flex-1 px-6 pt-16 pb-8">
            <ScrollView>
                <StatusBar style="light" />
                <Text className="font-pbold text-3xl text-white mb-6">
                    Search
                </Text>
                <Input />

                <Text className="font-pbold text-2xl text-white mt-10 mb-4">
                    Collections
                </Text>
                <FlatGrid
                    itemDimension={130}
                    data={collections}
                    renderItem={({ item }) => <Collection />}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Search;
