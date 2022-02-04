import styled from 'styled-components'

import { 
  faGithubSquare, 
  faLinkedin, 
  faYoutubeSquare, 
  faWhatsappSquare
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Social() {
  return (
    <>
    <div className="alert alert-warning text-center" role="alert">
      <FontAwesomeIcon icon={ faGithubSquare } size="3x" />
      <Link href="http://github.com/wellpinho">Github</Link>
    </div>

    <div className="alert alert-warning text-center" role="alert">
      <FontAwesomeIcon icon={ faLinkedin } size="3x" />
      <Link href="hhttps://www.linkedin.com/in/wellpinho/">Linkedin</Link>
    </div>

    <div className="alert alert-warning text-center" role="alert">
      <FontAwesomeIcon icon={ faYoutubeSquare } size="3x" />
      <Link href="https://www.youtube.com/channel/UCM4AFAyLADlAtgfxnUulAgA">Youtube</Link>
    </div>

    <div className="alert alert-warning text-center" role="alert">
      <FontAwesomeIcon icon={ faWhatsappSquare } size="3x" />
      <Link href="#/">Whatsapp</Link>
    </div>
    </>
  );
}

const Link = styled.a`
  color: #664d03;
  font-size: .8rem;
`

export default Social;