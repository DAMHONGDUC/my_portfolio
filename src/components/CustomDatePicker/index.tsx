/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from 'antd'
import localeJP from 'antd/es/date-picker/locale/ja_JP'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import moment from 'moment'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { DatepickerStyled } from './index.style'

type Props = {
  title?: string
  name: string
  size?: SizeType
  rules?: any[]
  disabled?: boolean
  className?: string
  format?: string
  required?: boolean
  style?: React.CSSProperties
  disabledDate?: any
  onChange?: (val: moment.Moment | null) => void
}

/**
 * custom DatePicker của antd
 * thường dùng trong antd Form
 */
const CustomDatePicker: React.FC<Props> = (props) => {
  const { t } = useTranslation()

  const rules = props.rules ?? []
  if (props.required) rules.push({ required: true, message: t('REQUIRED') })

  return (
    <>
      {props.title && <div>{props.title}</div>}
      <Form.Item name={props.name} rules={rules}>
        <DatepickerStyled
          disabled={props.disabled}
          size={props.size || 'large'}
          format={props.format ? 'DD/MM/YYYY' : 'MM/DD/YYYY'}
          style={{ ...props.style, width: '100%' }}
          // dropdownClassName='input__picker__dropdown'
          locale={localeJP}
          disabledDate={props.disabledDate}
          onChange={(e) => {
            if (props.onChange) {
              props.onChange!(e)
            }
          }}
        />
      </Form.Item>
    </>
  )
}

export default CustomDatePicker
