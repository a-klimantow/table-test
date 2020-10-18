import { useEffect } from "react"
import axios from "axios"

export const useFetch = ([{ config }, dispatch]) => {
  useEffect(() => {
    if (config?.method === "get") {
      axios(config).then((res) =>
        dispatch({ type: "get_success", payload: { data: res.data } })
      )
    }
  }, [config])
}
