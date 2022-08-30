import { gql} from '@apollo/client';
const ADD_CUSTOMER=gql`mutation CreateCustomer($firstname:String!, $lastname:String!,$email:String!,
  $password:String!,$is_subscribed:Boolean!) 
    {
  createCustomer(
    input: {
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      is_subscribed: $is_subscribed
    }
  ) {
    customer {
      firstname
      lastname
      email
      is_subscribed
    }
  }
}`
  ;
  export default ADD_CUSTOMER;