import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Button } from "./button";

type Props = {
    value: string;
    onChange: (value: string) => void;
    data: string[];
};

const Dropdown = ({ value, onChange, data }: Props) => {
    const [visible, setVisible] = useState(false);

    const onClose = () => setVisible(false);
    const onOpen = () => setVisible(true);

    return (
        <>
            <Modal
                animationType="slide"
                transparent
                visible={visible}
                onRequestClose={onClose}
            >
                <TouchableOpacity
                    className="flex-1 items-center justify-end bg-[#02061780]"
                    onPress={onClose}
                    activeOpacity={1}
                >
                    <View className="w-full bg-secondary rounded-tl-xl rounded-tr-lg px-6 py-4">
                        <ScrollView>
                            {data.map((item) => (
                                <TouchableOpacity
                                    key={item}
                                    className="py-4"
                                    onPress={() => {
                                        onChange(item);
                                        onClose();
                                    }}
                                >
                                    <Text className="font-pmedium text-base text-white">
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </TouchableOpacity>
            </Modal>
            <Button
                onPress={onOpen}
                title={value || "Select"}
                styleText="font-pmedium text-base text-gray-100"
                icon={
                    <Entypo
                        name={visible ? "chevron-up" : "chevron-down"}
                        size={20}
                        color="#AAB8C2"
                    />
                }
            />
        </>
    );
};

export default Dropdown;
