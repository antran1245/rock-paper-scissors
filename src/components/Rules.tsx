import close from '../assets/images/icon-close.svg'
import rules from '../assets/images/image-rules.svg'

interface RulesProps {
  setShowRules: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Rules({ setShowRules }: RulesProps) {
  return (
    <>
      <div className='absolute top-0 z-[3] bg-[#000000]/40 h-full w-full' onClick={() => setShowRules(false)}></div>
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] z-[3] translate-y-[-50%] bg-white rounded-[8px] w-fit py-[32px] pl-[32px] pr-[46px] sm:top-0 sm:left-0 sm:w-full sm:translate-x-0 sm:translate-y-0 sm:h-full sm:rounded-[0px] sm:flex sm:flex-col sm:justify-between sm:items-center sm:py-[35px] sm:pt-[95px] sm:pb-[66px]'>
        <div className='flex justify-between items-center mb-[48px]'>
          <p className='text-background text-[32px] font-[700] leading-[32px]'>RULES</p>
          <img src={close} alt="close button" className='cursor-pointer block sm:hidden' onClick={() => setShowRules(false)} />
        </div>
        <img src={rules} alt="rules" />
        <img src={close} alt="close button" className='cursor-pointer hidden sm:block' onClick={() => setShowRules(false)} />
      </div>
    </>
  )
}