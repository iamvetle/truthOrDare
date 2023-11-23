import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseTitle from './BaseTitle.vue'

const titleProp = "something idk"

describe("testing the title component", () => {

    const wrapper = mount(BaseTitle, {
        props: {
            title:titleProp
        }
    })

    test("Should exist", () => {
        expect(wrapper.exists()).toBe(true)
    })
    test("Should have a span element", () => {
        expect(wrapper.find("span").exists()).toBe(true)
    })
    test("Should have a title prop that get's rendered", () => {
        expect(wrapper.props("title")).toBeTruthy()
        expect(wrapper.props("title")).toBe(titleProp)
        expect(wrapper.text()).toContain(titleProp)
    })
})