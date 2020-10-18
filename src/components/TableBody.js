import React, { useContext } from "react"
import { AppContext } from "../context"

import { TableRow, TableRowCreate } from "./TableRow"

export const TableBody = () => {
  const [{ data, createId }] = useContext(AppContext)
  if (!data) return null
  return (
    <>
      {data.map((row, idx) => (
        <TableRow key={row[0].value} row={row} idx={idx} />
      ))}
      {createId && <TableRowCreate />}
    </>
  )
}
