import { gql} from '@apollo/client';
const PRODUCT_PAGINATION = gql`query getProducts($search:String!,$currentPages:Int!)
  {
    products(search: $search, pageSize: 5, currentPage:$currentPages) 
    {
      total_count
      items {
        uid
        name
        sku
        small_image{
          url
          label
      }
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
      }
      page_info {
        page_size
        current_page
      }
    }
  }`;

export default PRODUCT_PAGINATION;