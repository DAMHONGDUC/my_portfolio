import { Form } from 'antd'
import styled from 'styled-components'

export const LoginFormWrapper = styled.div`
  min-width: 400px;
  width: 400px;
  .ant-form-item-control-input {
    min-height: 0;
  }
  margin-left: 100px;
`

export const FormLogin = styled(Form)`
  text-align: center;
  .ant-btn {
    width: 170px;
    height: 44px;
    background: #00bdd6ff;
    margin-top: 40px;
    &:hover {
      background: #0095a9ff !important;
    }
  }
`

export const FormInput = styled.div`
  text-align: start;
  .ant-row {
    margin: 6px 0;
  }
  .ant-form-item-label {
    background: #f3f4f6ff;
    padding: 0;
    border-radius: 6px 6px 0 0;
    margin-top: 6px;

    .ant-form-item-required {
      padding-left: 8px;
      font-weight: bold;
      &:before {
        display: none !important;
      }
    }
  }

  .ant-input,
  .ant-input-password-large,
  .ant-form-item-control-input-content {
    border-radius: 0 0 6px 6px !important;
    border-top: none;
    background: #f3f4f6ff;
    border: none;

    &:focus {
      box-shadow: none !important;
    }
    .ant-input-affix-wrapper-focused {
      box-shadow: none !important;
    }
  }
`
export const FormHeader = styled.div`
  text-align: center;
  margin: 90px 0;
`
export const FormTitle = styled.div`
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 6px;
  font-weight: bold;
  text-transform: uppercase;
  color: #171a1fff;
`
export const FormDescription = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: #565e6cff;
`
