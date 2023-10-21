import { styled } from 'styled-components'
import { Layout, Menu, Tag } from 'antd'
import { theme } from '@/styles/theme/theme'

const { Header, Sider, Content } = Layout

export const LogoStyled = styled.img`
  max-width: 135px;
`

export const LogoWrapperStyled = styled.div`
  width: 100%;
  background-color: white;
  height: ${theme.adminHeaderHeight}px;
  border-right: 1px solid #e1e1e1;
  color: black;
  padding: 14px;
`

export const HeaderCustomStyled = styled(Header)`
  height: ${theme.adminHeaderHeight}px;
  padding: 0;
  background-color: white;
  /* background: ${theme.colors.adminBackground}; */
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`

export const ContentCustomStyled = styled(Content)`
  margin: 24px 16px;
  padding: 24;
  min-height: 280;
  background: white;
  border-radius: 8px;
  /* border: 1px solid #eee; */
  /* margin: 1.2rem; */
  margin: 0;
  /* background: ${theme.colors.adminBackground}; */
  overflow: auto;
`

export const SiderCustomStyled = styled(Sider)`
  .ant-menu-item {
    font-weight: 600;
    font-size: 16px;
    padding-left: 30px !important;
  }
  .ant-menu-item-selected {
    background-color: rgb(216, 250, 255);
    color: ${theme.colors.primary};
    font-weight: 600;
    padding-left: 30px !important;
    font-size: 16px;
  }
`
export const MenuCustomStyled = styled(Menu)`
  // .ant-menu-title-content {
  //   &:hover {
  //     color: ${theme.colors.primary};
  //   }
  // }
`

export const PageTitleStyled = styled(Tag)`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0;
  margin-left: 1.2rem;
  padding: 5px 1rem;
  color: ${theme.colors.primary};
  text-transform: uppercase;
  border: none;
  background: white;
`

export const ActionWrapperStyled = styled.div`
  display: flex;

  button {
    min-width: 100px !important;
    margin-right: 1rem;
    /* color: white; */
  }
`

export const AdminInfoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  /* font-size: 0.9rem; */
  cursor: pointer;
  /* border-left: 1px solid #ddd;
  padding-left: 1rem; */
`
