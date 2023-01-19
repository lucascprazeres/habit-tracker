import { useId } from "react";
import { ScrollView, Text, View } from "react-native";
import { generateDatesFromYearBeginning } from "../../utils/generate-dates-from-year-beginning";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";

const WEEK_DAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDates = 18 * 5 // 18 weeks
const amountOfDaysToFill = minimumSummaryDates - summaryDates.length

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {WEEK_DAYS.map(day => (
          <Text key={useId()} className="text-zinc-400 text-xl font-bold text-center mx-1" style={{ width: DAY_SIZE }}>
            {day}
          </Text>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {summaryDates.map(() => (
            <HabitDay key={useId()} />
          ))}

          {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map(() => (
            <HabitDay key={useId()} disabled />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}