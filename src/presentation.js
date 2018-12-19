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

const sandboxUrl = 'https://codesandbox.io/s/40k4y7p364'

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
            Keywords
          </Heading>
          <List>
            <ListItem>Typescript</ListItem>
            <ListItem>Code Sandbox</ListItem>
            <ListItem>React</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Typescript
          </Heading>
          <List>
            <ListItem>
              Statically-typed transpiles-to-javascript language
            </ListItem>
            <ListItem>Makes your editor better at helping you</ListItem>
            <ListItem>So hot right now</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Code Sandbox
          </Heading>
          <List>
            <ListItem>Powerful code editor that runs on your browser</ListItem>
            <ListItem>
              Imports external libraries you use, compiles your code, reloads
              your preview
            </ListItem>
            <ListItem>
              Useful for experiments and sharing code snippets
            </ListItem>
            <ListItem>
              <Link href={sandboxUrl}>
                Sandbox with the start of this project: {sandboxUrl}
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            React
          </Heading>
          <List>
            <ListItem>Revolutionary framework for User Interfaces</ListItem>
            <ListItem>Has you thinking in Components</ListItem>
            <ListItem>
              Merges HTML, styling and javascript together on the component
              level
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Let's add some css!
          </Heading>
          <List>
            <ListItem>
              <Link href="https://coolors.co/app">
                Coolors: generate appealing colour palettes
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://fonts.google.com/">
                Google Fonts: publicly distributed professional fonts
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's add some css!
          </Heading>
          <CodePane
            lang="html"
            textSize="1.3em"
            source={require('./snippets/css1.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's add some css!
          </Heading>
          <CodePane
            lang="html"
            textSize="0.85em"
            source={require('./snippets/html1.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            React Components
          </Heading>
          <List>
            <ListItem>Class Components</ListItem>
            <ListItem>Stateless Functional Components</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Class Components
          </Heading>
          <CodePane
            lang="javascript"
            textSize="0.85em"
            source={require('./snippets/jsx1.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's add a Scoreboard section!
          </Heading>
          <Appear>
            <div>
              <CodePane
                lang="javascript"
                textSize="0.85em"
                source={require('./snippets/jsx2.txt')}
                margin="20px auto"
                overflow="overflow"
              />
            </div>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Props, State and Context
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Components can be "given" data as `props`. They cannot
                manipulate `props` directly, they just use them.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Components can have their own `state`. They can update their own
                state as much as they want.
              </ListItem>
            </Appear>

            <Appear>
              <ListItem>
                Components can use `context`, which is like `state` on steroids.
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Props, State and Context
          </Heading>
          <List>
            <ListItem>Components will almost always use `props`</ListItem>
            <ListItem>Components will sometimes have `state`</ListItem>
            <ListItem>
              Components will only use `context` in advanced cases
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's create a Functional Component!
          </Heading>
          <Appear>
            <div>
              <CodePane
                lang="javascript"
                textSize="0.85em"
                source={require('./snippets/jsx3.txt')}
                margin="20px auto"
                overflow="overflow"
              />
            </div>
          </Appear>
          <Text>
            Class Components are classes, Functional Components are just
            functions!
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Typescript interlude!
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
            Typescript interlude!
          </Heading>
          <CodePane
            lang="javascript"
            textSize="0.85em"
            source={require('./snippets/ts2.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            What are functions anyway?
          </Heading>
          <CodePane
            lang="javascript"
            textSize="0.7em"
            source={require('./snippets/ts3.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Fat arrow syntax
          </Heading>
          <CodePane
            lang="javascript"
            textSize="0.65em"
            source={require('./snippets/ts4.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's use some Props!
          </Heading>
          <CodePane
            lang="javascript"
            textSize="1em"
            source={require('./snippets/jsx4.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's pass some Props!
          </Heading>
          <CodePane
            lang="javascript"
            textSize="0.9em"
            source={require('./snippets/jsx5.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            Let's use some State!
          </Heading>
          <CodePane
            lang="javascript"
            textSize="0.55em"
            source={require('./snippets/jsx6.txt')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            User interaction
          </Heading>
          <Appear>
            <Image
              margin="20px auto"
              src={require('./images/we-have-technology.gif')}
            />
          </Appear>
          <Text>Change the page according to user clicks!</Text>
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
