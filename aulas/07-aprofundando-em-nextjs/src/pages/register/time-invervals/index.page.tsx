import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { Container, Header } from '../styles'
import {
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  IntervalsContainer,
} from './styles'
import { ArrowRight } from 'phosphor-react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { getWeekDays } from '@/utils/get-week-days'

export const timeIntervalsFormSchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number(),
        enabled: z.boolean(),
        startTime: z.number(),
        endTime: z.number(),
      }),
    )
    .length(7)
    .transform((intervals) => intervals.filter((interval) => interval.enabled)),
})

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '09:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '09:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '09:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '09:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '09:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '09:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '09:00', endTime: '18:00' },
      ],
    },
  })

  const weekDays = getWeekDays()

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  async function handleSetTimeIntervals(data: any) {
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá!</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={3}></MultiStep>
      </Header>

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalsContainer>
          {fields.map((field, index) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Checkbox />
                  <Text>{weekDays[field.weekDay]}</Text>
                </IntervalDay>
                <IntervalInputs>
                  <TextInput
                    size="sm"
                    type="time"
                    step={60}
                    {...register(`intervals.${index}.startTime`)}
                  />
                  <TextInput
                    size="sm"
                    type="time"
                    step={60}
                    {...register(`intervals.${index}.endTime`)}
                  />
                </IntervalInputs>
              </IntervalItem>
            )
          })}
        </IntervalsContainer>

        <Button type="submit">
          Proximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
