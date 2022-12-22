import googleLogo from "../../../assets/images/google.svg"
import appleLogo from "../../../assets/images/apple.svg"
import facebookLogo from "../../../assets/images/facebook.svg"

interface SocialButtons {
    social?: 'fb' | 'gg' | 'ap';
}
export default function SocialButton({ social = 'gg'}: SocialButtons) {
    let source = {img: googleLogo, name: 'Google'}
    if (social == 'ap') {
        source = {img: appleLogo, name: 'Apple'}
    }
    if ( social == 'fb') {
        source = {img: facebookLogo, name: 'Facebook'}
    }
  return (
   <button className="bg-gray-100t rounded-lg items-center justify-center border border-gray-100t w-1/3 h-8 text-xs font-semibold text-white flex gap-1 hover:bg-hoverBlue transition-colors">
       <img src={source.img} />
       <span>{source.name}</span>
   </button>
  )
}
