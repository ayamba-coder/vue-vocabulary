import { addDecorator, addParameters } from '@storybook/vue'

import { withDesign } from 'storybook-addon-designs'
import { withKnobs } from '@storybook/addon-knobs'

import i18n from '@/i18n'

import viewports from './viewport'
import order from './order'

import '@creativecommons/vocabulary/css/vocabulary.css'

addParameters({
  options: {
    showRoots: true,
    storySort: order
  },
  backgrounds: [
    { name: 'canvas', value: '#f5f5f5', default: true },
    { name: 'white', value: '#ffffff' },
    { name: 'black', value: '#000000' }
  ],
  viewport: {
    viewports
  }
})

addDecorator(withDesign)
addDecorator(withKnobs)
addDecorator(
  () => ({
    i18n,
    template: '<story/>',
    // https://github.com/storybookjs/storybook/issues/6548#issuecomment-504336665
    beforeCreate: function () {
      this.$root._i18n = this.$i18n
    }
  })
)
