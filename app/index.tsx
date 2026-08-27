import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-app-bg">
      <Text className="text-xl font-bold text-text-primary">
        testing GitHub Repo Transfer Yay!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-neon-lime py-3.5 text-text-primary">
        Go to onboarding
      </Link>
    </View>
  );
}
