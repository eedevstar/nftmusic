import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

import Caption2 from '@components/common/Text/Caption2'

const NavIcon = styled.div`
  width: 36px;
  height: 36px;
  position: relative;
  display: ${props => props.active ? 'block' : 'none'}
`

const NavIconHidden = styled(NavIcon)`
  display: ${props => props.active ? 'none' : 'block'}
`

const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin: 15px 0;
`

const Label = styled(Caption2)`
  color: ${props =>
    props.active ? props.theme.colors.dark : props.theme.colors.gray50};
`

const NavButton = ({ icon, label, path }) => {
  const router = useRouter()
  const active = router.pathname.startsWith(path)
  const image = `/images/navs/${icon}.png`
  const imageActive = `/images/navs/${icon}-active.png`

  return (
    <Link href={path} passHref>
      <NavLink href="#">
        <NavIcon active={active}>
          <Image src={imageActive} alt={label} layout="fill" priority={true} />
        </NavIcon>
        <NavIconHidden active={active}>
          <Image src={image} alt={label} layout="fill" priority={true} />
        </NavIconHidden>
        <Label active={active}>{label}</Label>
      </NavLink>
    </Link>
  )
}

export default NavButton
