import { Link } from '@remix-run/react'
import React from 'react'

const AboutUsSection = () => {
  return (
    <section className="p-1 px-3 flex h-[100vh] w-screen bg-[url('/1.jpg')]" style={{backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="w-[36%] h-full bg-[url('/4.jpg')]" style={{backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="flex h-full flex-col justify-center w-[64%]">
            <span className='text-[16px] font-bold text-[#7d8185]'>COMMENCEZ VOTRE APPRENTISSAGE</span>
            <h1 className='text-[54px] max-[1023px]:text-[50px] font-bold max-[767px]:text-[42px] max-[599px]:text-[35px]'>Améliorez votre travail scolaire en apprenant avec nous n'importe où</h1>
            <div className='text-[18px] text-[#7d8185]'>World-class training and development programs <br/>developed by top teachers</div>
            <Link to={'/'} className='font-medium text-[16px] w-[150px] py-[10px] rounded-[24px] px-[30px] bg-black text-white'>Commencez</Link>
        </div>
        </div>
    </section>
  )
}

export default AboutUsSection