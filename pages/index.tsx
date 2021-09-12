import {
  useQuery,
  gql
} from "@apollo/client";
import ApolloWrapper from "components/ApolloWrapper";

  const GET_GREETING = gql`
    query {
      greetings
    }
  `

const HomePage = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_GREETING);
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error! {error.message}</div>
  
  return (
      <div>Helo world
        {data?.greetings}
      </div>
  )
}

const HomePageWithApollo = (): JSX.Element => {
  return (<ApolloWrapper>
      <HomePage/>
    </ApolloWrapper>
    )
}

export default HomePageWithApollo;