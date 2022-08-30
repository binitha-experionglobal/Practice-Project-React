import { useLazyQuery } from '@apollo/client';
import { Formik, Form, Field } from 'formik';
import React, { useEffect, useState } from 'react';
import PRODUCT_PAGINATION from './productPagination.gql';
import { Link } from 'react-router-dom';
import './product.css'

const ProductSearch = () => {
  const pageNums=[];
  const [totalPages, setTotalPages] = useState(0);
  const [searchWord, setSearchWord] = useState("");
  const [searchProduct, { data, loading, error }] = useLazyQuery(PRODUCT_PAGINATION);

  useEffect(() => {
    console.log(data);

    //calculate total pages
    if (data && data.products.total_count > 0) {
      setTotalPages(Math.ceil(data.products.total_count / 5));
    }
  },[data])

  if (loading) return 'Loading...';

  //gql query call after button click
  const callPage=(pageNext)=>{
    searchProduct({variables:
      {
        search:searchWord,
        currentPages:pageNext
      }})
  }

  //to set array for map function
  const getPaginationButton = () => {
    if (totalPages && totalPages > 0)
     {
      for(let i=1;i<=totalPages;i++){
        pageNums.push(i);
      }
    }
  }

  //gql query search
  const search = (values) => {
    try {
      searchProduct({ variables: 
        {
        search:values.search,
        currentPages:1
      } });
      setSearchWord(values.search);
    }
    catch (error) {
      const { message } = error;
      console.log(error);
      alert(message);
    }
  }

  return (
    <>
    <Link to ="/">Home</Link>&nbsp;&nbsp;
      <div className='title'>PRODUCTS</div>

      <Formik
        initialValues={{
          search: '',
        }}
        onSubmit={values => {
          search(values)
        }
        }
      >

        <Form>
          <Field type="search" id="search" name="search" className='field' placeholder="Search here"/>
          <button type='submit' className='go'>Search</button>
        </Form>
      </Formik>

      {/* print data */}
      {data && data.products && data.products.items.map((item) => (
        <div className='products'>{item.name}
        <img src={item.small_image.url} className="photo"/>
        </div>
        
      ))}

      {/* buttons for pagination */}
      {data && data.products&&getPaginationButton()}
         {data && data.products&&pageNums.map((i)=>(
            <button className='pills' onClick={()=>callPage(i)} >{i}&nbsp;&nbsp;</button>
         ))} 

    </>
  )
}
export default ProductSearch;
