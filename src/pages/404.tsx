import { Heading } from '@chakra-ui/react'
import Page from '../components/layout/page'

const NotFound = () => {
    return (
        <Page title="dApp: 404">
            <Heading as="h2" textAlign="center">
                Sorry, Page not found 🥺
            </Heading>
        </Page>
    )
}

export default NotFound
