import close from '../assets/images/icon-close.svg'
import rules from '../assets/images/image-rules.svg'

interface RulesProps {
  setShowRules: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Rules({ setShowRules }: RulesProps) {
  return (
    <>
      <div className='absolute top-0 bg-[#000000]/40 h-full w-full' onClick={() => setShowRules(false)}></div>
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-[8px] w-fit py-[32px] pl-[32px] pr-[46px]'>
        <div className='flex justify-between items-center mb-[48px]'>
          <p className='text-background text-[32px] font-[700] leading-[32px]'>RULES</p>
          <img src={close} alt="close button" className='cursor-pointer' onClick={() => setShowRules(false)} />
        </div>
        <img src={rules} alt="rules" />
      </div>
    </>
  )
}