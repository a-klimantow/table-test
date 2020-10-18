import { useReducer } from "react"

import { useFetch } from "./useFetch"
export const useApp = () => {
  const state = useReducer(reducer, {
    data: null,
    editIdx: null,
    createId: null,
    config: { method: "get", url: "https://frontend-test.netbox.ru" },
  })
  useFetch(state)
  return state
}

function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case "edit_start":
      return { ...state, editIdx: payload.idx, createId: null }

    case "edit_cancel":
      return { ...state, editIdx: null }

    case "edit_save":
      return {
        ...state,
        data: state.data.map((row, i) =>
          i === state.editIdx ? payload.row : row
        ),
        editIdx: null,
      }

    case "row_remove":
      return {
        ...state,
        data: state.data.filter((_, i) => i !== payload.idx),
        createId: null,
      }

    case "create_start":
      const dataIds = state.data.map(([id]) => id.value)
      const id = Math.max(...dataIds) + 1
      return {
        ...state,
        createId: isFinite(id) ? id : 1,
        editIdx: null,
      }

    case "create_cancel":
      return { ...state, createId: null }

    case "create_save":
      return {
        ...state,
        data: [...state.data, payload.row],
        createId: null,
      }

    case "get_success":
      return { ...state, data: payload.data }

    default:
      console.error(type)
      return state
  }
}
