export default defineAppConfig({
  theme: {
    primaryColor: '#202531',
  },
  ui: {
    button: {
      slots: {
        base: 'rounded-xl hover:cursor-pointer',
      },
      variants: {
        size: {
          md: {
            base: 'px-6 py-3',
          },
          lg: {
            base: 'px-8 py-3',
          },
        },
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class:
            'bg-primary-0 text-white hover:bg-[var(--color-hover-filled)] hover:shadow-sm focus-visible:outline-0 focus-visible:bg-[var(--color-focus-filled)] disabled:bg-primary-0',
        },
        {
          color: 'primary',
          variant: 'outline',
          class:
            'ring-neutral-60 text-neutral-0 hover:text-accent-50 hover:ring-accent-50 focus-visible:hover:ring-neutral-60',
        },
        {
          color: 'primary',
          variant: 'soft',
          class:
            'bg-primary-80 text-primary-0 shadow-md hover:bg-[var(--color-hover-tonal)] disabled:bg-primary-80 focus-visible:bg-[var(--color-focus-tonal)]',
        },
        {
          size: 'md',
          square: true,
          class: 'p-3',
        },
        {
          size: 'lg',
          square: true,
          class: 'p-3',
        },
      ],
    },

    container: {
      base: 'sm:px-4 lg:px-4',
    },

    drawer: {
      slots: {
        container: 'pt-3 px-4 pb-8',
      },
      variants: {
        direction: {
          bottom: {
            content: 'rounded-t-2xl',
          },
        },
      },
    },

    alert: {
      slots: {
        root: 'px-6 py-5 rounded-xl',
        title: 'text-base',
        wrapper: 'gap-4',
        icon: 'size-6',
      },
      compoundVariants: [
        {
          color: 'neutral',
          variant: 'outline',
          class: {
            root: 'ring-neutral-80 bg-transparent text-black ring-2',
          },
        },
      ],
    },

    inputMenu: {
      slots: {
        base: 'rounded-3xl',
      },
      variants: {
        size: {
          md: {
            base: 'px-3 py-3.5',
            trailingIcon: 'size-6 text-black cursor-pointer',
            itemLeadingIcon: 'size-6 text-black',
          },
        },
        variant: {
          outline: 'text-black ring-input-border',
        },
        multiple: {
          false: {
            base: 'placeholder:text-input-placeholder',
          },
        },
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'outline',
          class: 'focus-visible:ring-input-focus',
        },
      ],
    },

    formField: {
      slots: {
        container: 'mt-1.5',
        label: 'font-normal',
      },
      variants: {
        md: {
          root: 'text-xs',
        },
      },
    },

    avatar: {
      slots: {
        root: 'border-2 border-white',
      },
    },
  },
});
