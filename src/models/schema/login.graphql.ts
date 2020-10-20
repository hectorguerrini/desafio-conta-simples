const LoginTypeDef = `
type User {
  username: String!    
}

extend type Query {
  me: User
}

type Mutation {
  login(username: String!, password: String!): User
  signup(username: String!, password: String!): User
}

`
const LoginResolver = {
    Query: {
       
    },
    Mutation: {
        
    }
}

export { LoginTypeDef, LoginResolver };