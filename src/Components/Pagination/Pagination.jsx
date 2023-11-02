/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

const PaginationContainer = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const PageNumber = styled.li`
  margin: 0;
  padding: 0;
  font-size: 16px;
`;

const PageLink = styled.a`
  text-decoration: none;
  color: ${props => props.active ? '#fff' : '#007bff'};
  background-color: ${props => props.active ? '#007bff' : 'transparent'};
  padding: 5px 10px;
  border: 1px solid #007bff;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const Pagination = ({ paginate, sortedProducts, itemsPerPage }) => {
  const [activePage, setActivePage] = useState(1);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(sortedProducts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber, event) => {
    event.preventDefault();
    setActivePage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <PaginationContainer className="pagination">
      {pageNumbers.map((number) => (
        <PageNumber key={number}>
          <PageLink
            href="#!"
            active={number === activePage}
            onClick={(event) => handlePageClick(number, event)}
          >
            {number}
          </PageLink>
        </PageNumber>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
