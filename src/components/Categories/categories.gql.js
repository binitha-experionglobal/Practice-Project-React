import { gql} from '@apollo/client';

const GET_CATEGORIES = gql`
query getMegaMenu {
    categoryList {
        id
        uid
        name
        children {
            id
            uid
            name
            children {
                id
                uid
                name
                children {
                    id
                    uid
                    name
                    children {
                        id
                        uid
                        name
                    }
                }
            }
        }
    }
}
`;



export default GET_CATEGORIES;

