import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface ButtonProps {
  className?: string
  type?: string
  primary?: boolean
  danger?: boolean
  width?: any
  height?: any
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
}

const BasicButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { className, children } = props

  return (
    <button
      type="button"
      className={className}
    >
      {children && children}
    </button>
  )
}

const primaryStyle = css`
  color: white;
  background: blue;
`
const dangerStyle = css`
  color: white;
  background: red;
`
export const EmotionButton = styled(BasicButton)`
  border: none;
  box-shadow: none;
  cursor: pointer;
  width: ${props => {
    if (typeof props.width === 'string') return props.width /* % 단위 */
    if (props.width) return `${props.width}px`
    return 'auto'
  }};
  height: ${props => {
    if (typeof props.height === 'string') return props.height /* % 단위 */
    if (props.height) return `${props.height}px`
    return 'auto'
  }};
  ${props => {
    if (props.type === 'primary') return primaryStyle
    if (props.type === 'danger') return dangerStyle
    return
  }};
  ${props => {
    if (props.primary) return primaryStyle
    if (props.danger) return dangerStyle
    return
  }};

  &:hover {
    opacity: .8;
    transition: all .15s;
  }
`