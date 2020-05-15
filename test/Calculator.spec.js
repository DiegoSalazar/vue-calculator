import { shallowMount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'

describe('Calculator', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Calculator)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('test 2')
})
