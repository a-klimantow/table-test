import React from "react"
import styled from "reshadow/macro"

export const Input = ({ ...props }) =>
  styled()`
    input {
      outline: none;
      width: 100%;
      font: inherit;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
    }
  `(<input type="text" {...props} />)
