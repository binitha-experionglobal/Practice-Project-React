import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import ADD_CUSTOMER from "./createAccount.gql";
import { useMutation } from "@apollo/client";
// import Toast from "@magento/venia-ui/lib/components/ToastContainer/toast";

const ContactUs = () => {
  const [addCustomer,{loading,data,error}] = useMutation(ADD_CUSTOMER)
    if (loading) return 'Loading...';
    return (<>
     <Link to ="/">Home</Link>&nbsp;&nbsp;
        <div className='title'>Create Account</div><br/><br/>
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        is_subscribed:false,
      }}

      onSubmit={ async values => {
        try {
        const response = await addCustomer({
        variables: values
        });
        alert(`User created successfully! `);
        } catch (error) {
        const { message } = error;
        console.log(error);
        alert(message);
        }
        }}
    >

      <Form>
        <label htmlFor="firstname">First Name</label>&nbsp;
        <Field id="firstname" name="firstname" placeholder="Jane" /><br/>
        <label htmlFor="lastname">Last Name</label>&nbsp;
        <Field id="lastname" name="lastname" placeholder="Doe" /><br/>
        <label htmlFor="email">Email</label>&nbsp;
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        /><br/>
        <label htmlFor="password">Password</label>&nbsp;
        <Field
          id="password"
          name="password"
          placeholder="p@sswOR4"
          type="password"
        /><br/>
        <label htmlFor="is_subscribed"> Subscribe Us</label>&nbsp;
        <Field type="checkbox" name="is_subscribed" id="is_subscribed"  />
       <br/><br/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </>)
}
export default ContactUs;


