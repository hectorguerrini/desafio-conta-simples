const LoginTypeDef = `
type User {
  username: String!    
}

extend type Query {
  me: User
}

type Mutation {
  login(username: String!, password: String!): User
  signup(username: String!, password: String!): User!
}

`
const LoginResolver = {
    Query: {
       
    },
    Mutation: {
        login: (_: any, { username, password }: any) => {          
          if(password == "root")
            return {username};
          return null;
        }
    }
}

export { LoginTypeDef, LoginResolver };