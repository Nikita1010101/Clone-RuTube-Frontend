import { FC, PropsWithChildren, useEffect } from 'react'
import Head from 'next/head'
import cn from 'classnames'
import styles from './Layout.module.scss'

import { Navbar } from './Navbar/Navbar'
import { Sidebar } from './Sidebar/Sidebar'
import { SearchResults } from './Screens/Search-results/SearchResults'
import { ILayout } from './Layout.interface'

import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useRouter } from 'next/router'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

export const Layout: FC<PropsWithChildren<ILayout>> = ({
  children,
  title,
  description,
}) => {
  const { searchValue } = useTypedSelector((state) => state.search)
  const { changeSearchValue } = useActions()
  const { asPath } = useRouter()
  const { profile } = useAuth()

  useEffect(() => {
    changeSearchValue('')
  }, [asPath, changeSearchValue])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className={cn(styles.home, { [styles.isAuth]: profile })}>
        <Sidebar />
        {!searchValue ? <>{children}</> : <SearchResults />}
      </main>
    </>
  )
}
