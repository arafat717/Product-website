


import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductUI from "../ShortAndFilter/ProductUI";
import Pagination from "../Pagination/Pagination";

const Card = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedSort, setSelectedSort] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);




    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    useEffect(() => {
        fetch('https://summer-camp-school-server-wheat.vercel.app/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);


    const filteredProducts = products.filter((product) => {
        if (selectedCategory === "all") {
            return true;
        }
        else if (selectedCategory === "clothing") {
            return product.category === "Clothing";
        }
        else if (selectedCategory === "electronics") {
            return product.category === "Electronics";
        }
        else if (selectedCategory === "books") {
            return product.category === "Books";
        }
        return product.category === selectedCategory;
    });


    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (selectedSort === "asc") {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);



    const PageContainer = styled.div`
  padding: 40px; /* Add padding to the entire page */

`;

    const CardContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 300px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    transition: transform 0.2s ease;
  
    &:hover {
      transform: scale(1.05);
    }
  
    &:hover .button-wrapper button {
      opacity: 1;
      width: 100%;
    }

    @media (min-width: 768px) {
        width: calc(50% - 20px); 
        padding: 50px 50px; 
      }

    @media (min-width: 768px) {
        width: calc(33.33% - 20px); 
        padding: 20px;
      }
    
      @media (min-width: 1200px) {
        width: calc(25% - 20px); 
        padding: 20px 40px;
      }
  `;

    const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
  `;

    const CardTitle = styled.h2`
    font-size: 24px;
    margin: 0;
    margin-top: 12px;
  `;

    const CardDescription = styled.p`
    font-size: 16px;
  `;

    const CardPrice = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  `;

    const CardImage = styled.img`
    max-width: 100%;
    height: auto;
  `;

    const PurchaseButton = styled.button`
    background-color: #007bff;
    color: #fff;
    padding: 10px 0; 
    border: none;
    border-radius: 2px; 
    opacity: 0;
    transition: opacity 0s ease, width 0.2s ease; 
    cursor: pointer;
  
    &:hover {
      background-color: #0056b3;
    }
  `;

    const ButtonWrapper = styled.div`
    margin-top: auto;
    width: 100%; 
  `;


    const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;




    return (
        <div>
            <ProductUI
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
            />
            <PageContainer>

                <CardGrid>
                    {
                        currentProducts.map(product => <CardContainer key={product._id}>
                            <CardImage src={product.image} alt="Card Image" />
                            <CardContent>
                                <CardTitle>{product.title}</CardTitle>
                                <CardDescription>
                                    {product.description}
                                </CardDescription>
                                <CardPrice>$ {product.price}</CardPrice>
                            </CardContent>
                            <ButtonWrapper className="button-wrapper">
                                <PurchaseButton>Buy Now</PurchaseButton>
                            </ButtonWrapper>
                        </CardContainer>)
                    }

                </CardGrid>
                <Pagination paginate={paginate} sortedProducts={sortedProducts} itemsPerPage={itemsPerPage}></Pagination>
            </PageContainer>
        </div>
    );
};

export default Card;