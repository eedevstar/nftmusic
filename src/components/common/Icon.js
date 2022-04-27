import styled, { css } from 'styled-components'

import CheckCircle from '@assets/icons/check-circle.svg'
import Check from '@assets/icons/check.svg'
import Cross from '@assets/icons/cross.svg'
import CrossGrey from '@assets/icons/cross-grey.svg'
import Lang from '@assets/icons/lang.svg'
import Linkedin from '@assets/icons/linkedin.svg'
import Medium from '@assets/icons/medium.svg'
import Menu from '@assets/icons/menu.svg'
import Telegram from '@assets/icons/telegram.svg'
import Twitter from '@assets/icons/twitter.svg'
import Show from '@assets/icons/show.svg'
import Hide from '@assets/icons/hide.svg'
import Facebook from '@assets/icons/facebook.svg'
import Google from '@assets/icons/google.svg'
import Apple from '@assets/icons/apple.svg'
import Kakaotalk from '@assets/icons/kakaotalk.svg'
import SocialTwitter from '@assets/icons/twitter2.svg'
import Info from '@assets/icons/info-text.svg'
import Error from '@assets/icons/error-text.svg'
import Success from '@assets/icons/success-text.svg'
import LeftArrow from '@assets/icons/left-arrow.svg'
import RightArrow from '@assets/icons/right-arrow.svg'
import BottomArrow from '@assets/icons/bottom-arrow.svg'
import UpArrow from '@assets/icons/up-arrow.svg'
import Star from '@assets/icons/Star3.svg'
import WhiteCheck from '@assets/icons/white-check.svg'
import Rect64 from '@assets/icons/rect64.svg'
import AlbumDefault from '@assets/icons/album-default.svg'
import ArtistDefault from '@assets/icons/artist-default.svg'
import Copy from '@assets/icons/copy.svg'
import LightGreyCopy from '@assets/icons/light-grey-copy.svg'
import WhiteCopy from '@assets/icons/white-copy.svg'
import Remove from '@assets/icons/remove.svg'
import ETH from '@assets/icons/ETH.svg'
import Tx from '@assets/icons/tx-icon.svg'
import TxReceive from '@assets/icons/tx-receive.svg'
import Exchange from '@assets/icons/exchange.svg'
import Send from '@assets/icons/send.svg'
import Search from '@assets/icons/search.svg'
import SlideRightArrow from '@assets/icons/slide-right-arrow.svg'
import SlideLeftArrow from '@assets/icons/slide-left-arrow.svg'
import TwitterSamll from '@assets/icons/twitter-small.svg'
import FacebookSamll from '@assets/icons/facebook-small.svg'
import KakaotalkSamll from '@assets/icons/kakaotalk-small.svg'
import PlayButton from '@assets/icons/play_button.svg'
import Share from '@assets/icons/share.svg'
import Metamask from '@assets/icons/metamask.svg'
import Edit from '@assets/icons/edit.svg'
import Cover from '@assets/icons/cover.svg'
import Ok from '@assets/icons/ok.svg'
/**
 * Parameters
 * type (Icon Name)
 * hoverColor (color hex value)
 */

const IconMap = {
  CheckCircle,
  Check,
  Cross,
  CrossGrey,
  Lang,
  Menu,
  Linkedin,
  Medium,
  Telegram,
  Twitter,
  Show,
  Hide,
  Facebook,
  Google,
  Apple,
  Kakaotalk,
  SocialTwitter,
  Info,
  Error,
  Success,
  LeftArrow,
  RightArrow,
  BottomArrow,
  UpArrow,
  Star,
  WhiteCheck,
  Rect64,
  AlbumDefault,
  ArtistDefault,
  Copy,
  LightGreyCopy,
  Remove,
  ETH,
  Tx,
  TxReceive,
  WhiteCopy,
  Exchange,
  Send,
  Search,
  SlideRightArrow,
  SlideLeftArrow,
  TwitterSamll,
  FacebookSamll,
  KakaotalkSamll,
  PlayButton,
  Share,
  Metamask,
  Edit,
  Cover,
  Ok,
}

const IconWrapper = styled.div`
  display: flex;

  ${props =>
    props.hoverColor &&
    css`
      cursor: pointer;
      &:hover path,
      &:hover circle {
        fill: ${props => props.hoverColor};
        stroke: ${props => props.hoverColor};
      }
    `}
`

export default function Icon({ type, hoverColor, ...rest }) {
  const Component = IconMap[type]
  if (Component) {
    return (
      <IconWrapper hoverColor={hoverColor} {...rest}>
        <Component {...rest} />
      </IconWrapper>
    )
  }

  return null
}
