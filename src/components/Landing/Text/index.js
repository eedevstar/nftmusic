import h1 from './h1'
import h2 from './h2'
import h3 from './h3'
import body1 from './body1'
import body2 from './body2'
import body3 from './body3'
import caption from './caption'

const map = {
  h1, h2, h3,
  body1, body2, body3,
  caption
}

const Text = ({ type, ...rest }) => {
  const Component = map[type];
  if (Component) {
    return <Component {...rest} />
  }

  return <p {...rest} />
}

export default Text
