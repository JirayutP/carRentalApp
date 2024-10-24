'use client'
import { Provider as ReactReductProvider } from "react-redux"
import { store } from "./store"

export default function ReduxProvider({children}:{children:React.ReactNode}){
    return (
        <ReactReductProvider store={store}>
            {children}
        </ReactReductProvider>
    )
}