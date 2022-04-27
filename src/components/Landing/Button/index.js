import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const Buttons = {
  primary: PrimaryButton,
  secondary: SecondaryButton
}

const Button = ({ type, ...rest }) => {
  const Component = Buttons[type]
  return <Component {...rest} />
}

export default Button
