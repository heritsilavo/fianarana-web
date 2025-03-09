import AcceuilIllustration from '@/components/views/Accueil/AccueilContents/AcceuilIllustration'
import React from 'react'
import AccTextes from '@/components/views/Accueil/AccueilContents/AccTextes'

const Accueil = () => {
  return <section className='w-full min-h-[100dvh] lg:min-h-[100dvh] lg:h-[100dvh)] flex flex-col'>
    <div className="w-full flex-1 bg-background flex flex-col relative lg:flex-row lg:px-10 xl:px-15 2xl:px-20">
      <div className="bg-background px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full lg:w-[60%] flex flex-col  justify-center">
        <AccTextes></AccTextes>
      </div>

      <div className="flex-1 w-full lg:w-1/2 relative bg-background flex items-center justify-center px-4 md:px-6 mt-4 md:mt-6 lg:mt-0 lg:px-8 xl:px-10 2xl:px-12 max-lg:pb-4">
        <AcceuilIllustration className='w-full h-full max-w-[350px] md:max-w-[550px] xl:max-w-[750px] 2xl:max-w-[1000px]'></AcceuilIllustration>
        <div className='bg-black h-[100px]'></div>
      </div>

    </div>
  </section>
}

export default Accueil