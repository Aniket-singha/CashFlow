import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

export default function Home() {
    const loggedIn={firstName:"Aniket",lastName:"Singh",email:"aniekgtisxngbdxg@gmx.com"};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
               <HeaderBox 
               type="greeting"
               title="Welcome"
               user={loggedIn?.firstName || "Guest"}
               subtext="Access and manage your account and transactions effciently"
               />
               <TotalBalanceBox
               accounts={[]}
               totalBanks={1}
               totalCurrentBalance={1235.98}
               />
            </header>
          
        </div>
        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.5},{currentBalance:135.2}]}/>
    </section>
  )
}
