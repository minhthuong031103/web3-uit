import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Dropdown from "../../components/drop-down";
import { RankingCollect } from "../../components/ranking-collect";
import TabsView from "../../components/tabs-view";

const Stats = () => {
    const [active, setActive] = useState("Rankings");
    const [category, setCategory] = useState("All Categories");
    const [chain, setChain] = useState("All Chains");

    const labels = ["Rankings", "Activity"];

    const categories = ["All Categories", "Art", "Gaming"];
    const chains = ["All Chains", "Ethereum", "Binance", "Polygon"];
    const collections = [1, 2, 3, 4, 5];

    return (
        <SafeAreaView className="flex-1 bg-dark px-6 pt-16 pb-8">
            <ScrollView>
                <StatusBar style="light" />
                <Text className="font-pbold text-3xl  text-white">Stats</Text>

                <TabsView
                    active={active}
                    labels={labels}
                    onChange={setActive}
                />

                <View
                    className="mt-6 flex-row"
                    style={{
                        columnGap: 8,
                    }}
                >
                    <Dropdown
                        data={categories}
                        value={category}
                        onChange={setCategory}
                    />
                    <Dropdown data={chains} value={chain} onChange={setChain} />
                </View>

                <FlatList
                    scrollEnabled
                    data={collections}
                    renderItem={({ item, index }) => (
                        <RankingCollect key={item} index={index} />
                    )}
                    style={{
                        marginTop: 32,
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Stats;
