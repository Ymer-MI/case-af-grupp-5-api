import { Section } from './styled/Wrappers'
import { Button } from './styled/Buttons'

export const Error = () => {
    return <Section>
        <h1>404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Button type='button' onClick={ () => location.href = '/' }>Return home</Button>
    </Section>
}