
import * as React from "react"
import { usetransaction-history, transaction-historyProps }from "./transaction-history.hook"

export function transaction-history(props: transaction-historyProps){
  const hook = usetransaction-history(props)
  return <div>This is a transaction-history component</div>
}

export default transaction-history
