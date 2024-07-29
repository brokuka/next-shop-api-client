import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:(outline-none ring-2 ring-ring ring-offset-2) disabled:(opacity-50 cursor-not-allowed) min-w-[204px]',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-base-100 hover:bg-blue-700 font-medium active:bg-blue-800 focus-visible:bg-blue-700 disabled:(bg-neutral-100 text-neutral-400)',
        link: 'hover:underline underline-offset-3 text-blue-600',
      },
      size: {
        default: 'h-10 px-4 py-2',
        link: 'p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
