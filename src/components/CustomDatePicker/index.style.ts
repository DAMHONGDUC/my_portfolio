import { DatePicker } from 'antd'
import styled from 'styled-components'

export const DatepickerStyled = styled(DatePicker)`
  .ant-picker-header-view {
    color: #2d3742;
    font-weight: bold;
    font-size: 1.8rem;
    text-align: center;
  }
  .ant-picker-cell-in-view.ant-picker-cell-today
    .ant-picker-cell-inner::before {
    border-radius: 50%;
    border: 1px solid #08c4e3;
  }
  .ant-picker-content th {
    text-align: center;
    font-weight: bold;
    color: #272b2f;
  }
  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner {
    background-color: #08c4e3 !important;
    border-radius: 50%;
    color: #ffffff;
  }
  .ant-picker-cell .ant-picker-cell-inner {
    font-size: 1.6rem;
    color: #272b2f;
    text-align: center;
    height: 3.6rem;
    line-height: 3.6rem;
    min-width: 3.6rem;
    border-radius: 50%;
  }
  .ant-picker {
    border: 1px solid #aeb8c7;
    height: 5.6rem;
    input {
      font-size: 1.8rem;
      color: #272b2f;
    }
    border-radius: 4px;
    width: 100%;
    &:hover {
      border-color: #272b2f;
    }
    &.ant-picker-focused {
      border-color: #08c4e3 !important;
      box-shadow: 0px 0px 8px rgba(8, 196, 227, 0.24) !important;
    }
  }
`
