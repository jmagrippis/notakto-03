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

const sandboxUrl = 'https://codesandbox.io/s/l9npx2062l'

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
            Workshop #2
          </Heading>
          <Text>
            <ListItem>User Interaction</ListItem>
            <ListItem>Event Handling</ListItem>
            <ListItem>Updating State</ListItem>
            <ListItem>
              <Link href={sandboxUrl}>
                Sandbox with the start of this project: {sandboxUrl}
              </Link>
            </ListItem>
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            User Interaction: Back in my day...
          </Heading>
          <Appear>
            <Image
              margin="20px auto"
              src={require('./images/sleepyDwarf.gif')}
            />
          </Appear>
          <Text>Slow back and forth from browser to server to a new page</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            User Interaction: Now...
          </Heading>
          <List>
            <ListItem>Immediate feedback</ListItem>
            <ListItem>
              Optimistic updates with server work behind the scenes
            </ListItem>
            <ListItem>All done with the power of Javascript</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's create a Win Button!
          </Heading>
          <Appear>
            <div>
              <CodePane
                lang="javascript"
                textSize="0.65em"
                source={require('./snippets/tsx1.txt')}
                margin="20px auto"
                overflow="overflow"
              />
            </div>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Events
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Events happen as the user interacts with your app
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                They relate to a specific <strong>element</strong>: the same{' '}
                <strong>type</strong> of event is dispatched when a user clicks
                on a button, as when they click on an image, but they have
                different <strong>targets</strong>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                They never stop happening: if the user clicks a button an
                infinite amount of times, an infinite amount of events of that
                type with the button as the target will be dispatched
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Handling Events
          </Heading>
          <CodePane
            lang="javascript"
            textSize="1em"
            source={require('./snippets/ts1.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's do it in React!
          </Heading>
          <CodePane
            lang="javascript"
            textSize="0.85em"
            source={require('./snippets/tsx2.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's define it as a class method!
          </Heading>
          <CodePane
            lang="javascript"
            textSize="0.75em"
            source={require('./snippets/tsx3.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's update the state!
          </Heading>
          <CodePane
            lang="javascript"
            textSize="0.75em"
            source={require('./snippets/tsx4.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            how does setState work anyway?
          </Heading>
          <CodePane
            lang="javascript"
            textSize="1.1em"
            source={require('./snippets/ts2.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            how does setState work anyway?
          </Heading>
          <CodePane
            lang="javascript"
            textSize="1em"
            source={require('./snippets/ts3.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's increment the wins!
          </Heading>
          <Appear>
            <div>
              <CodePane
                lang="javascript"
                textSize="1em"
                source={require('./snippets/tsx5.txt')}
                margin="20px auto"
                overflow="overflow"
              />
            </div>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            How would we add a player two wins button?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's add a P2 wins button!
          </Heading>
          <Appear>
            <div>
              <CodePane
                lang="javascript"
                textSize="0.65em"
                source={require('./snippets/tsx6.txt')}
                margin="20px auto"
                overflow="overflow"
              />
            </div>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Next time
          </Heading>
          <Appear>
            <Image margin="20px auto" src={require('./images/ticTac.webp')} />
          </Appear>
          <Text>Let's make a grid!</Text>
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
