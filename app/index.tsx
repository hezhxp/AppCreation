import "@/global.css";
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { Link } from "expo-router";
import * as SQLite from 'expo-sqlite';
import { Text, View } from "react-native";

const expo = SQLite.openDatabaseSync('db.db');

const db = drizzle(expo);

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-app-bg">
      <Text className="text-xl font-bold text-text-primary">
        testing GitHub Repo Transfer Yay!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-neon-lime py-3.5 text-text-primary">
        Im ill but trust im still learning 
      </Link>
    </View>
  );
}