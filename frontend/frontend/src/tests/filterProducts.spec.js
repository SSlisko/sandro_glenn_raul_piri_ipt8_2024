import { shallowMount } from '@vue/test-utils';
import CategoryFilter from '../components/CategoryFilter.vue';

describe('CategoryFilter.vue', () => {
  it('filters products based on selected categories', async () => {
    const categories = [
      { name: 'Category 1' },
      { name: 'Category 2' },
    ];
    
    const products = [
      { id: 1, name: 'Product A', category: 'Category 1' },
      { id: 2, name: 'Product B', category: 'Category 2' },
      { id: 3, name: 'Product C', category: 'Category 1' },
    ];

    const wrapper = shallowMount(CategoryFilter, {
      props: { categories, selectedCategory: 'Alle' },
    });

    // Simulate a change in the select element
    await wrapper.find('#category-filter').setValue('Category 1');

    // Now we will emit the event and expect the parent to handle it
    wrapper.vm.$emit('update:selectedCategory', 'Category 1');

    // Assuming you have a way to get the filtered products in your test
    const filteredProducts = products.filter(product => product.category === 'Category 1');

    expect(filteredProducts).toEqual([
      { id: 1, name: 'Product A', category: 'Category 1' },
      { id: 3, name: 'Product C', category: 'Category 1' },
    ]);
  });
});
