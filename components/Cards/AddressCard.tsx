import { Address } from '@data/addresses-data'

interface AddressCardProps {
    address: Address
}

export const AddressCard: React.FC<AddressCardProps> = ({ address }) => {
    return (
        <div className='flex w-full justify-between gap-[24px] overflow-hidden mobile:flex-col desktop:flex-row'>
            <div className='flex flex-1 flex-col items-start justify-center gap-[24px] rounded-[5px] border-[1px] border-white p-[40px]'>
                <div className='flex flex-wrap gap-[6px] font-accent text-[22px] leading-[120%] mobile:flex-col desktop:flex-row'>
                    <h1 className='opacity-30'>DEVELOPMENT CENTER</h1>
                    <address className='not-italic'>{address.basedIn}</address>
                </div>
                <ul className='font-secondary text-[16px] leading-[200%]'>
                    <li>
                        <address className='not-italic'>
                            {address.address}
                        </address>
                    </li>
                    <li>{address.email}</li>
                </ul>
            </div>
        </div>
    )
}
