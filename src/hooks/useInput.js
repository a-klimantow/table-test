import { useState } from "react"

export const useInput = ({ value: defaultValue = "", type, field } = {}) => {
  const [value, setValue] = useState(defaultValue)

  return {
    value,
    change(e) {
      const { value } = e.target
      setValue(type === "integer" ? value.replace(/[^\d]/, "") : value)
    },

    item: {
      value,
      type,
      field,
    },
  }
}
