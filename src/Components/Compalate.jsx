import React from 'react'
import { Complate } from '../assets/Icons'

const Compalate = () => {
  return (
    <div className='container'>
        
        <div className="shadow-[5px_10px_15px_5px_rgba(0,0,0,0.3)] rounded-3xl mt-[147px] ml-[20%] w-[822px] h-[324px] py-[30px] flex flex-col items-center">
            {/*w-[100px] mb-[30px] mt-[30px] */}
            <Complate/>
            <h5 className='text-[40px] mt-[32px]'>Подтверждение Завершено</h5>
            <p className='text-[30px] bold'>Поздравляем! Вы были успешно зарегистрированы.</p>
        </div>
    </div>
  )
}


export default Compalate