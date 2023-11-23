import index from './index.vue';
import { shallowMount } from '@vue/test-utils';

let wrapper: any;

const factory = () => {
    return shallowMount(index, {
        global: {
            plugins: [],
            components: {},
            mocks: {},
            stubs: {},
        },
        props: {},
        slots: {}
    })
};

describe('Testing the index page', () => {

    beforeEach(() => {
    });

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
        }
    });
    test('Should exist', () => {
        wrapper = factory()

        expect(wrapper.exists()).toBe(true)
    })

});