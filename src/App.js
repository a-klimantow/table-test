import React from "react"

import { AppContext } from "./context"
import { Table, TableHead, TableBody } from "./components"
import { useApp } from "./hooks"

function App() {
  const state = useApp()
  return (
    <AppContext.Provider value={state}>
      <Table>
        <TableHead />
        <TableBody />
      </Table>
    </AppContext.Provider>
  )
}

export default App
