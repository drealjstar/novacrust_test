import { Copy, MessageCircleWarning, ArrowLeft } from 'lucide-react'

const Details = () => {
    return (
        <div className='flex  items-center flex-col h-screen'>
            <div className='w-4xl flex'>
                <ArrowLeft size={24} className='mt-10' />
                <h1 className='mb-5 mt-10 pl-65 text-2xl'>Send ETH to the address below</h1>
            </div>
            <div className='bg-green-100 mb-30 mt-10 h-15 w-70 flex items-center justify-center rounded-full'>
                <p className='pr-6'>4LiV4Yjbxs6739MKghUd</p>
                <Copy size={20} />
            </div>
            <div className='h-50 bg-gray-100 w-4xl mb-10 rounded-lg'>
                <div className='ml-10'>
                    <div className='flex justify-between mt-7'>
                        <p >Amount to send</p>
                        <span className='flex justify-end  w-30 mr-10'><p className='pr-5'>100 ETH</p> <Copy size={24} /></span>
                    </div>
                    <div className='flex justify-between mt-7' >
                        <p>Network</p>
                        <span className='flex justify-end  w-30 mr-10'><p className='pr-1'>ETH</p></span>
                    </div>
                    <div className='flex justify-between mt-7' >
                        <p>Wallet</p>
                        <span className='flex justify-end  w-30 mr-10'><p className='pr-1'>Other</p></span>
                    </div>
                </div>
            </div>
            <div className='flex  w-4xl'>
                <MessageCircleWarning size={35} />
                <p className='pl-7'>Only send {`{USDT}`} to this address. Ensure the sender is on the {`{CELO}`} network </p>
            </div>
            <p className='place-self-start pl-84'>otherwise you might lose your deposit</p>

            <button className='h-15 w-4xl bg-green-900 text-white text-xl mt-30 mb-15 rounded-full'>I have send it</button>
        </div>
    )
}

export default Details;