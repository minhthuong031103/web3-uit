import { MaterialIcons } from "@expo/vector-icons";
import { Image, View } from "react-native";
import { images } from "../constants";
import { cn } from "../lib/utils";

type Props = {
    imageURL: string;
    popular?: boolean;
    imageStyle?: string;
    iconSize?: number;
};

export const Avatar = ({
    imageURL,
    imageStyle,
    popular = false,
    iconSize = 12,
}: Props) => {
    return (
        <View className="relative border-2 border-secondary rounded-full shadow-md">
            <Image
                // source={{
                //     uri: imageURL,
                // }}
                source={images.avatar}
                alt="Avatar"
                className={cn("rounded-full object-cover", imageStyle)}
            />
            <View className="absolute -right-1 -bottom-1">
                {popular && (
                    <MaterialIcons
                        name="verified"
                        size={iconSize}
                        color="#1D9BF0"
                    />
                )}
            </View>
        </View>
    );
};
