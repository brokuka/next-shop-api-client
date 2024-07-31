import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background focus-visible:(outline-none focus-visible:ring-2 ring-ring ring-offset-2) transition-colors  disabled:(opacity-50 cursor-not-allowed)',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-base-100 hover:bg-blue-700 text-sm font-medium active:bg-blue-800 focus-visible:bg-blue-700 disabled:(bg-neutral-100 text-neutral-400)',
        link: 'hover:underline underline-offset-3 text-blue-600 text-xs',
        ghost: 'bg-none',
      },
      size: {
        default: 'h-10 px-4 py-2 min-w-[204px]',
        link: 'p-0',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
