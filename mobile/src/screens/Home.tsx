import { useNavigation, useFocusEffect } from "@react-navigation/native";
import dayjs from "dayjs";
import { useCallback, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { generateDatesFromYearBeginning } from "../../utils/generate-dates-from-year-beginning";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { api } from "../lib/axios";

const WEEK_DAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDates = 18 * 5 // 18 weeks
const amountOfDaysToFill = minimumSummaryDates - summaryDates.length

type Summary = Array<{
  id: string
  date: string
  amount: number
  completed: number
}>

export function Home() {
  const [loading, setLoading] = useState(false)
  const [summary, setSummary] = useState<Summary>([])

  const { navigate } = useNavigation()

  async function fetchData() {
    try {
      setLoading(true)
      const response = await api.get('/summary')
      setSummary(response.data)
    } catch (error) {
      Alert.alert('Ops', 'Não foi possível carregar o sumário de hábitos')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchData()
  }, []))

  if (loading) {
    return <Loading />
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {WEEK_DAYS.map((day, index) => (
          <Text key={`${day}-${index}`} className="text-zinc-400 text-xl font-bold text-center mx-1" style={{ width: DAY_SIZE }}>
            {day}
          </Text>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {summaryDates.map((date) => {
            const dayInSummary = summary.find(day => {
              return dayjs(date).isSame(day.date, 'day')
            })

            return (
              <HabitDay
                key={date.toISOString()}
                date={date}
                amount={dayInSummary?.amount}
                completed={dayInSummary?.completed}
                onPress={() => navigate('habit', { date: date.toISOString() })}
              />
            )
          })}

          {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => (
            <View key={index} className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40" style={{ height: DAY_SIZE, width: DAY_SIZE }} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}