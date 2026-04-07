import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

type DivProps = ComponentPropsWithoutRef<'div'>

export const WebPageOuter: FC<{ children?: ReactNode } & DivProps>
export const WebHero: FC<{ children?: ReactNode } & DivProps>
export const WebHeroInner: FC<{ children?: ReactNode } & DivProps>
export const WebTitle: FC<{ children?: ReactNode } & ComponentPropsWithoutRef<'h1'>>
export const WebSubtitle: FC<{ children?: ReactNode } & ComponentPropsWithoutRef<'p'>>
