import "@/global.css";
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { Link } from 'expo-router';
import * as SQLite from 'expo-sqlite';
import { Text, View } from 'react-native';
import migrations from '../drizzle/migrations';

const db = SQLite.openDatabaseSync('mydb.db');
const schema = drizzle(db);

export default function App() {
  useMigrations(schema, migrations);
  return (
    <View className="flex-1 items-center justify-center bg-app-bg">
      <Text className="text-xl font-bold text-text-primary">
        erm how does this database thing work brodi
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-neon-lime py-3.5 text-text-primary">
        Im ill but trust im still learning 
      </Link>
    </View>
  );
}