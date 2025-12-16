import { Cpu, CircleCheck, Copy } from 'lucide-react'

const Process = () => {
    return (
        <div className='flex  items-center flex-col h-screen mt-10' >
            <div className='w-4xl flex justify-center'>
                <Cpu size={24} className='mt-11 text-green-900' />
                <h1 className='mb-5 mt-10 text-2xl pl-1 font-bold text-green-900'>NOVACRUST</h1>
            </div>
            <span className='mt-25 '><CircleCheck size={50} className='text-green-600' /></span>
            <p className='pl-7 pb-5 mt-15 text-2xl'>Your transaction is processing</p>
            <p className='pl-5 pb-15' >The recipient will receive it shortly.</p>
            <div className='bg-gray-100 mb-30 mt-10 h-15 w-4xl flex  justify-between items-center rounded-lg'>
                <p className='pl-10'>Transaction ID</p>
                <div className='w-45 flex'>
                    <p className='pr-5'>NC123456789</p>
                    <Copy size={24} className='pr-1' />
                </div>
            </div>
            <span><h2 className='text-2xl text-green-900'>Go back to home</h2></span>
        </div>
    )
}

export default Process;