'use client'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { getQueryClient } from "./helpers/react-query"

type ProvidersProps = {
    children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
    const queryClient = getQueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}