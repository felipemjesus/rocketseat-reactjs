import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, type TextInputProps } from '@felipemjesus-ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    placeholder: 'Type your email address',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
