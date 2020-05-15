import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'

describe('Calculator', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Calculator)
    expect(wrapper.isVueInstance()).to.be.true
  })

  it('test 2')
})