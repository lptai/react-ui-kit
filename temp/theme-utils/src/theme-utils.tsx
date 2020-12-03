
import * as React from "react"
import { usetheme-utils, theme-utilsProps }from "./theme-utils.hook"

export function theme-utils(props: theme-utilsProps){
  const hook = usetheme-utils(props)
  return <div>This is a theme-utils component</div>
}

export default theme-utils
