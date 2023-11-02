import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #fff;
  color: #333;
  padding: 60px 0;
  text-align: center;
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 20px;
  margin: 0 20px;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;


function LargerFooter() {
  return (
    <FooterWrapper>
      <FooterText>
        &copy; {new Date().getFullYear()} Your Beautiful Company
      </FooterText>
      <FooterText>
        <FooterLink href="https://www.example.com">Terms of Service</FooterLink>
        <FooterLink href="https://www.example.com">Privacy Policy</FooterLink>
        <FooterLink href="https://www.example.com">Contact Us</FooterLink>
        <FooterLink href="https://www.example.com">About Us</FooterLink>
        <FooterLink href="https://www.example.com">Blog</FooterLink>
      </FooterText>
    </FooterWrapper>
  );
}

export default LargerFooter;
