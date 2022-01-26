import { Heading, Text, VStack } from '@chakra-ui/react'
import { useContext } from 'react'
import Page from '../components/layout/page'
import { DappContext } from '../contexts/dAppContext'

const Home = () => {
    const {
        accountConnected,
        accountLoading,
        accountAddress,
        accountAddressPreview,
        accountTezBalance
    } = useContext(DappContext)

    return (
        <Page title="dApp: Home" description="Home page for dApp">
            <Heading textAlign="center">Home Page</Heading>
            <VStack>
                <Text>connected?: {String(accountConnected)}</Text>
                <Text>loading?: {String(accountLoading)}</Text>
                <Text>address?: {accountAddress}</Text>
                <Text>address preview?: {accountAddressPreview}</Text>
                <Text>
                    Tez balance?:{' '}
                    {accountTezBalance ? accountTezBalance : 'NaN'} xtz
                </Text>
            </VStack>
        </Page>
    )
}

export default Home
