import { ReactNode } from 'react'

export interface iTezosContext {
    // Account
    accountConnected: boolean
    accountLoading: boolean
    accountAddress: string
    accountAddressPreview: string
    accountTezBalance: string
    // Misc.
    error: string
    connectAccount?: () => Promise<void>
    disconnectAccount?: () => void
}

export interface iProviderProps {
    children?: ReactNode
}
