// tests/MyComponent.spec.js
import { mount } from '@vue/test-utils';
import App from '../App.vue';
import axios from 'axios';
import { vi } from 'vitest';

vi.mock('axios'); // Mock the axios module

describe('MyComponent', () => {
  it('fetches products and categories from API', async () => {
    // Mock response data
    const mockCategories = [
      {
        name: 'Fruits',
        products: [{ name: 'Apple' }, { name: 'Banana' }],
      },
      {
        name: 'Vegetables',
        products: [{ name: 'Carrot' }, { name: 'Broccoli' }],
      },
    ];
    
    // Mock the API response
    axios.get.mockResolvedValue({ data: mockCategories });

    const wrapper = mount(App);

    // Wait for the API call to resolve
    await wrapper.vm.$nextTick();

    // Verify that categories are set correctly
    expect(wrapper.vm.categories).toEqual(mockCategories);
    expect(wrapper.vm.filteredProducts).toEqual(mockCategories.flatMap(category => category.products));
  });
});
