import React from "react"
import styled from "reshadow/macro"

export const TableHead = () =>
  styled()`
    table_heads {
      display: contents;
    }

    span {
      padding: 0.5rem;
      border-bottom: 2px solid #ccc;
      font-weight: bold;
    }
  `(
    <table_heads>
      <span>ID</span>
      <span>Имя</span>
      <span>Возраст</span>
      <span>Телефон</span>
      <span>Электронная почта</span>
      <span />
    </table_heads>
  )
