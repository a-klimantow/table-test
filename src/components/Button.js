import React from "react"

export const Button = ({ children, kind, ...props }) => (
  <p className="control">
    <button className={`button is-${kind}`} {...props}>
      {children}
    </button>
  </p>
)
