import type { Meta, StoryObj } from '@storybook/react'
import { Heading, type HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Heading',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
