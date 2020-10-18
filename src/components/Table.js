import React from "react"
import styled from "reshadow/macro"

import { CreateBtn } from "./CreateBtn"

export const Table = ({ children }) =>
  styled()`
    table_wrap {
      margin: 20px;
      display: grid;
      grid-gap: 1em;
    }

    table {
      display: grid;
      grid-template-columns: 50px 1fr 100px 200px 1fr auto;
    }
  `(
    <table_wrap>
      <table as="div">{children}</table>
      <CreateBtn />
    </table_wrap>
  )
