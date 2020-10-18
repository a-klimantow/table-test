import React, { useContext } from "react"
import styled, { css } from "reshadow/macro"

import { AppContext } from "../context"
import { useInput } from "../hooks"
import { Input } from "./Input"
import { Button } from "./Button"
import { Icon } from "./Icon"

export const styles = css`
  row {
    --padding: 0.5rem;
    --border: 1px solid #ccc;
    --display: inline-grid;
    display: contents;
  }

  span {
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
    white-space: nowrap;
    display: inline-grid;
    align-content: center;
    &:last-child {
      grid-auto-flow: column;
      grid-gap: 0.5rem;
    }
  }
`

export const TableRow = ({ idx, row, isCreate = false }) => {
  const [{ editIdx }, dispatch] = useContext(AppContext)

  const isEdit = editIdx === idx

  return (
    <>
      {isEdit ? (
        <RowEdit
          data={row}
          editSave={(row) => dispatch({ type: "edit_save", payload: { row } })}
          editCancel={() => dispatch({ type: "edit_cancel" })}
        />
      ) : (
        <RowSimple
          data={row}
          editStart={() => dispatch({ type: "edit_start", payload: { idx } })}
          rowRemove={() => dispatch({ type: "row_remove", payload: { idx } })}
        />
      )}
    </>
  )
}

const RowSimple = ({ data, editStart, rowRemove }) =>
  styled(styles)(
    <row>
      {data.map(({ field, value }) => (
        <span key={field}>{value}</span>
      ))}
      <span>
        <Button kind="primary" onClick={editStart}>
          <Icon type="user-edit" />
        </Button>
        <Button kind="danger" onClick={rowRemove}>
          <Icon type="trash" />
        </Button>
      </span>
    </row>
  )

const RowEdit = ({ data, editSave, editCancel }) => {
  const [id, name, age, phone, email] = data
  const inputs = [
    useInput(name),
    useInput(age),
    useInput(phone),
    useInput(email),
  ]
  const isDisabled = canSave(inputs)
  return styled(styles)(
    <row>
      <span>{id.value}</span>
      {inputs.map((inp, i) => (
        <span key={i}>
          <Input value={inp.value} onChange={inp.change} />
        </span>
      ))}
      <span>
        <Button
          kind="info"
          onClick={() => editSave([id, ...inputs.map(({ item }) => item)])}
          disabled={isDisabled}
        >
          <Icon type="save" />
        </Button>
        <Button kind="warning" onClick={editCancel}>
          <Icon type="ban" />
        </Button>
      </span>
    </row>
  )
}

export const TableRowCreate = () => {
  const [{ createId }, dispatch] = useContext(AppContext)
  const inputs = [
    useInput({ value: "", field: "Name", type: "string" }),
    useInput({ value: "", field: "Age", type: "integer" }),
    useInput({ value: "", field: "Phone", type: "string" }),
    useInput({ value: "", field: "E-mail", type: "string" }),
  ]

  const onSave = () => {
    const newRow = [
      { value: createId, field: "ID", type: "integer" },
      ...inputs.map(({ item }) => item),
    ]
    dispatch({ type: "create_save", payload: { row: newRow } })
  }

  const isDisabled = canSave(inputs)

  return styled(styles)(
    <row>
      <span>{createId}</span>
      {inputs.map((inp, i) => (
        <span key={i}>
          <Input value={inp.value} onChange={inp.change} />
        </span>
      ))}
      <span>
        <Button kind="info" onClick={onSave} disabled={isDisabled}>
          <Icon type="save" />
        </Button>
        <Button
          kind="warning"
          onClick={() => dispatch({ type: "create_cancel" })}
        >
          <Icon type="ban" />
        </Button>
      </span>
    </row>
  )
}

function canSave(arr = []) {
  return !arr.every((item) => item.value)
}
