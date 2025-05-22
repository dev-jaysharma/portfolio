import React from 'react'
import { cn } from '@/lib/utils'

function Container({children , className}: {children: React.ReactNode , className?: string}) {
  return (
    <div className={cn("container mx-auto w-full z-10 dark:bg-neutral-950 bg-neutral-50 max-w-6xl" , className)}>
        {children}
    </div>
  )
}

export default Container