"use client"
import { Dripsy } from './dripsy'
import { ReactQueryProvider } from './reactQuery'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <Dripsy>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </Dripsy>
  )
}
