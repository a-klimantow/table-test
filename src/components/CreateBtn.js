import React, { useContext } from "react"
import { AppContext } from "../context"
import { Button } from "./Button"

export const CreateBtn = () => {
  const [{ createId, data }, dispatch] = useContext(AppContext)
  if (createId || !data) return null
  return (
    <Button kind="info" onClick={() => dispatch({ type: "create_start" })}>
      Добавить пользователя
    </Button>
  )
}
