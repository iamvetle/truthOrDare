import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Title from './Title.vue'

describe("testing the title component", () => {

    const wrapper = mount(Title, {
        props: {
            title:"post"
        }
    })

    test("Should exist", () => {
        expect(wrapper.exists()).toBe(true)
    })
    test("Should have a span element", () => {
        expect(wrapper.find("span").exists()).toBe(true)
    })
    test("Should have a title prop", () => {
        expect(wrapper.props("title")).toBeTruthy()
    })


})