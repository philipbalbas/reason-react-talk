import React from 'react';
import styled from '@emotion/styled';
import { Split as S, SplitRight as SR } from 'mdx-deck/layouts';

const Wrapper = styled.main`
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  & > div[class*='Split'] {
    height: 90vh;
  }

  & h1 {
    padding-top: 2rem;
  }

  & > div > div:first-child {
    height: 90vh !important;
  }
`;

const Footer = styled.footer`
  font-size: 16px;
  color: white;
  border-top: 1px solid #dc5f53;
  padding: 30px 100px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  text-align: right;
`;

const Layout = ({ children }) => (
  <>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <span>ReactJS Philippines 🇵🇭</span>
      <span>Philip Balbas</span>
    </Footer>
  </>
);

export const Split = ({ children, ...props }) => (
  <Layout>
    <S {...props}>{children}</S>
  </Layout>
);

export const SplitRight = ({ children, ...props }) => (
  <Layout>
    <SR {...props}>{children}</SR>
  </Layout>
);

export default Layout;
