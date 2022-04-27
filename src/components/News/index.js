import styled from 'styled-components'
import Article from '@components/News/Article'

const articles = [
  {
    title:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula dolor.',
    content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula dolor.`,
    date: 'Yesterday in 3:45 PM',
    tags: ['Fresh', 'Album', 'Heavy Metal'],
  },
  {
    title:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula dolor.',
    content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula dolor.`,
    date: 'Yesterday in 3:45 PM',
    tags: ['Auction', 'Heavy Metal'],
  },
  {
    title:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula dolor.',
    content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula dolor.`,
    date: 'Yesterday in 3:45 PM',
    tags: ['Token Sale', 'Album', 'Heavy Metal'],
  },
]

const Index = props => {
  return (
    <Wrapper>
      {articles.map((item, i) => (
        <ArticleBox key={i}>
          <Article data={item} />
        </ArticleBox>
      ))}
    </Wrapper>
  )
}

export default Index

const Wrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`

const ArticleBox = styled.div`
  margin-bottom: 25px;
`
