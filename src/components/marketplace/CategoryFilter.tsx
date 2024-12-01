import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2 rounded-full ${
            selectedCategory === category
              ? 'bg-purple-900 text-white'
              : 'bg-white text-gray-700 hover:bg-purple-100'
          } transition-colors`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;