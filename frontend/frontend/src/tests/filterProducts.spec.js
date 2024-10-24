// tests/unit/CategoryFilter.spec.js
import { mount } from '@vue/test-utils';
import CategoryFilter from '@/components/CategoryFilter.vue';

describe('CategoryFilter.vue', () => {
  const categories = [
    { name: 'Fruits' },
    { name: 'Vegetables' },
    { name: 'Dairy' },
  ];

  it('renders all categories correctly', () => {
    const wrapper = mount(CategoryFilter, {
      props: { categories, selectedCategory: 'Alle' },
    });

    const options = wrapper.findAll('option');
    expect(options).toHaveLength(categories.length + 1); // +1 for "Alle" option

    expect(options[0].text()).toBe('Alle');
    categories.forEach((category, index) => {
      expect(options[index + 1].text()).toBe(category.name);
    });
  });

  it('emits update:selectedCategory when a category is selected', async () => {
    const wrapper = mount(CategoryFilter, {
      props: { categories, selectedCategory: 'Alle' },
    });

    await wrapper.find('select').setValue('Fruits');

    expect(wrapper.emitted('update:selectedCategory')).toBeTruthy();
    expect(wrapper.emitted('update:selectedCategory')[0]).toEqual(['Fruits']);
  });
});
