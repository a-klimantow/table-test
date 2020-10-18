import { css } from "reshadow/macro"

export default css`
  container {
    border: 1px solid blue;
    display: grid;
    place-content: center;
  }
  table {
    border: 1px solid red;
  }

  table_row,
  table_head {
    color: red;
    display: grid;
    grid-template-columns: 1fr auto auto 1.5fr auto;
    grid-gap: 10px;
  }
`
