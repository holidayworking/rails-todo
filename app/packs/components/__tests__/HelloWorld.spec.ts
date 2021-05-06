import { shallowMount } from '@vue/test-utils';

import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    expect.assertions(1);

    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });

    expect(wrapper.text()).toMatch(msg);
  });
});
