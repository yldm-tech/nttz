import type { NextPage } from 'next'
import Head from 'next/head'

import Counter from '../components/counter/Counter'
import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Redux Toolkit</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className={styles.header}>
                <img src="/logo.svg" className={styles.logo} alt="logo"/>
                <Counter/>
                <p>
                    编辑 <code>pages/_app.tsx</code> 保存并查看.
                </p>
                <span>
          <span>学习 </span>
          <a
              className={styles.link}
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
              className={styles.link}
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
              className={styles.link}
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> 和 </span>
          <a
              className={styles.link}
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
            </header>
        </div>
    )
}

export default IndexPage
