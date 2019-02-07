import React from 'react'
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import 'normalize.css'

const theme = createTheme(
  {
    primary: '#DADFF7',
    secondary: '#454545',
    tertiary: '#61E786',
    quaternary: '#EDFFEC',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
)

const sandboxUrl = 'https://codesandbox.io/s/olp7365nmq'

export default class Presentation extends React.PureComponent {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="quaternary">
            notakto
          </Heading>
          <Text margin="10px 0 0" textColor="quaternary" size={1} fit bold>
            tic-tac-toe for grownups
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Workshop #3
          </Heading>
          <Text>
            <ListItem>Styled Components</ListItem>
            <ListItem>Passing methods to update state</ListItem>
            <ListItem>
              <Link href={sandboxUrl}>
                Sandbox with the start of this project: {sandboxUrl}
              </Link>
            </ListItem>
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Defining Style
          </Heading>
          <Image margin="20px auto" src={require('./images/1style.webp')} />

          <Appear>
            <Text>
              With{' '}
              <Link href="https://www.styled-components.com/">
                Styled Components
              </Link>
              !
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Styled Components
          </Heading>
          <List>
            <ListItem>
              Returns a React component of the element you give it...
            </ListItem>
            <ListItem>
              ...with the styles you specify with css syntax applied to it
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Styled Components
          </Heading>
          <CodePane
            lang="javascript"
            textSize="0.7em"
            source={require('./snippets/tsx1.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's make our scoreboard smaller!
          </Heading>
          <Appear>
            <div>
              <CodePane
                lang="javascript"
                textSize="0.65em"
                source={require('./snippets/tsx2.txt')}
                margin="20px auto"
                overflow="overflow"
              />
            </div>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Notakto: The spec
          </Heading>
          <List>
            <Appear>
              <ListItem>3 by 3 grid: 9 cells!</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Each cell is either empty or has an <strong>X</strong>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                On a player's turn, they have to put an <strong>X</strong> on an
                empty cell
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                The player that completes a set of three in a row (vertically,
                horizontally, or diagonally) <strong>loses</strong>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's make a Grid!
          </Heading>
          <CodePane
            lang="javascript"
            textSize="1em"
            source={require('./snippets/tsx3.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's make a Grid!
          </Heading>
          <CodePane
            lang="javascript"
            textSize="0.8em"
            source={require('./snippets/tsx4.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's render some Cells!
          </Heading>
          <Appear>
            <CodePane
              lang="javascript"
              textSize="0.6em"
              source={require('./snippets/tsx5.txt')}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's render the given cells!
          </Heading>
          <Appear>
            <CodePane
              lang="javascript"
              textSize="0.8em"
              source={require('./snippets/tsx6.txt')}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's give our grid some cells!
          </Heading>
          <Appear>
            <CodePane
              lang="javascript"
              textSize="0.8em"
              source={require('./snippets/tsx7.txt')}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's keep the grids in the state!
          </Heading>
          <Appear>
            <CodePane
              lang="javascript"
              textSize="0.8em"
              source={require('./snippets/tsx8.txt')}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            How do we update that state?
          </Heading>
          <Appear>
            <Image
              margin="20px auto"
              src={require('./images/8updateState.gif')}
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            datasets as a way to pass data!
          </Heading>
          <Appear>
            <CodePane
              lang="javascript"
              textSize="0.7em"
              source={require('./snippets/tsx9.txt')}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            datasets as a way to pass data!
          </Heading>
          <Appear>
            <CodePane
              lang="javascript"
              textSize="0.7em"
              source={require('./snippets/tsx10.txt')}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Next time
          </Heading>
          <Appear>
            <Image margin="20px auto" src={require('./images/9win.gif')} />
          </Appear>
          <Appear>
            <Text>WIN</Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Everything is possible, given infinite time</Quote>
            <Appear>
              <Cite>Johnny</Cite>
            </Appear>
          </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}
