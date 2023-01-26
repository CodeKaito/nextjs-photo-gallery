import Hero from '@/components/Hero'
import Slider from '@/components/Slider'
import Head from 'next/head'
import { SliderData } from '@/components/SliderData'
import Instagram from '@/components/Instagram'

export default function Home() {
  return (
    <>
      <Head>
        <title>Photography App</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main>
        <Hero heading='Captur Photography.'message='I capture moments.'/>
        <Slider slides={SliderData}/>
        <Instagram />
      </main>
    </>
  )
}
