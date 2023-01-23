import { useRoute } from "@react-navigation/native";
import { Alert, ScrollView, Text, View } from "react-native";
import dayjs from 'dayjs'
import { BackButton } from "../components/BackButton";
import { ProgressBar } from "../components/ProgressBar";
import { Checkbox } from "../components/CheckBox";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { api } from "../lib/axios";
import { generateProgressPercentage } from "../../utils/generate-progress-percentage";
import { HabitsEmpty } from "../components/HabitsEmpty";
import clsx from "clsx";

type Habit = {
  id: string
  title: string
  created_at: string
}

type HabitsInfo = {
  allHabits: Habit[]
  completedHabits: string[]
}

interface HabitRouteParams {
  date: string
}

export function Habit() {
  const [loading, setLoading] = useState(false)
  const [completedHabits, setCompletedHabits] = useState<string[]>([])
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>({
    allHabits: [],
    completedHabits: []
  })

  const route = useRoute()
  const { date } = route.params as HabitRouteParams

  const parsedDate = dayjs(date)
  const isDayInPast = parsedDate.endOf('day').isBefore(new Date())
  const weekDay = parsedDate.format('dddd')
  const dayAndMonth = parsedDate.format('DD/MM')

  const progress = habitsInfo.allHabits.length
    ? generateProgressPercentage(
      habitsInfo.allHabits.length, completedHabits.length
    ) : 0

  async function fetchHabits() {
    try {
      setLoading(true)

      const response = await api.get('/day', {
        params: {
          date
        }
      })

      setHabitsInfo(response.data)
      setCompletedHabits(response.data.completedHabits)
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Não foi possível carregar as informações dos hábitos')
    } finally {
      setLoading(false)
    }
  }

  async function handleToggleHabit(habitId: string) {
    try {
      await api.patch(`/habits/${habitId}/toggle`)
      
      if (completedHabits.includes(habitId)) {
        return setCompletedHabits(prevState => prevState.filter(id => id !== habitId))
      }
  
      setCompletedHabits(prevState => [...prevState, habitId])
    } catch (error) {
      console.error(error)
      Alert.alert('Ops', 'Não foi possível atualizar o status do hábito')
    }
  }

  useEffect(() => {
    fetchHabits()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {weekDay}
        </Text>

        <Text className="text-white font-extrabold text-3xl">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={progress} />

        <View className={clsx("mt-6", {
          ['opacity-50']: isDayInPast
        })}>
          {habitsInfo.allHabits.length > 0 ? habitsInfo.allHabits.map(habit => (
            <Checkbox
              key={habit.id}
              title={habit.title}
              checked={completedHabits.includes(habit.id)}
              onPress={() => handleToggleHabit(habit.id)}
              disabled={isDayInPast}
            />
          )) : (
            <HabitsEmpty />
          )}
        </View>

        {isDayInPast && (
          <Text className="text-white mt-10 text-center">
            Você não pode editar hábitos de uma data passada.
          </Text>
        )}
      </ScrollView>
    </View>
  )
}