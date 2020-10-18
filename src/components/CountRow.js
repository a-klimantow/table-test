import React, { useContext } from "react"
import styled from "reshadow/macro"

import { AppContext } from "../context"

export const CountRow = () => {
  const [{ data }] = useContext(AppContext)
  if (!data) return null
  return styled()`
    count {
      width: max-content;
      margin: 0 auto;
    }
  `(<count>Колличество строк в таблице: {data.length}</count>)
}
