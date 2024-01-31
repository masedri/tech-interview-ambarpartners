import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import { generateRamdonLawers } from '@/core/utils'
import LawersDetailView from '@/views/LawersDetailView.vue'

describe('LawersDetailView', () => {
  it('changes isList to false and updates lawerDetail on detailLawer method call', async () => {
    const wrapper = mount(LawersDetailView)
    const lawer = generateRamdonLawers(1)
    await wrapper.vm.detailLawer(lawer)
    expect(wrapper.vm.isList).toBe(false)
    expect(wrapper.vm.lawerDetail).toEqual(expect.objectContaining(lawer))
  })

  it('changes isList to true on goToListView method call', async () => {
    const wrapper = mount(LawersDetailView, {
      data() {
        return { isList: false }
      },
    })
    await wrapper.vm.goToListView()
    expect(wrapper.vm.isList).toBe(true)
  })
})
