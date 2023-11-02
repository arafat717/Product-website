/* eslint-disable react/prop-types */

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top:20px;
  padding-left: 40px;
  padding-right: 40px;
`;

const FilterSelect = styled.select`
  padding: 12px;
  border: 2px solid #3498db;
  border-radius: 8px;
  outline: none;
  background-color: #f0f0f0;
  color: #3498db;
  font-size: 16px;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;



function ProductUI({selectedCategory,
  setSelectedCategory,
  selectedSort,
  setSelectedSort,
}) {
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };
  return (
    <div>
      <Container>
        <FilterSelect onChange={handleCategoryChange} value={selectedCategory}>
          <option value="all">All Products</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </FilterSelect>
        <FilterSelect onChange={handleSortChange} value={selectedSort}>
          <option value="asc">Price (Low to High)</option>
          <option value="desc">Price (High to Low)</option>
        </FilterSelect>
      </Container>
      <ProductList>
        
      </ProductList>
    </div>
  );
}

export default ProductUI;
