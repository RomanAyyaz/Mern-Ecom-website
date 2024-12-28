import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { AddProductApi } from './AddProductApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Navbar from '../Navbar/Navbar'
function AddProduct() {
  const queryClient = useQueryClient()
  const initialValues = {
    name: '',
    price: '',
    category: '',
    discount: '',
    description: '',
    brand:'',
    files: [],
  };

  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    price: yup.number().required('Required'),
    category: yup.string().required('Required'),
    description: yup.string().required('Required'),
  });

  const addProductMutation = useMutation({
    mutationFn: AddProductApi,
    onSuccess: () => {
      queryClient.invalidateQueries('product')
      console.log('Data sent successfully');
    },
    onError: () => {
      console.log('Error in sending data');
    },
  });

  const handleFileChange = (event, setFieldValue) => {
    setFieldValue('files', event.currentTarget.files);
  };

  const onSubmit = (values, onSubmitProps) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('price', values.price);
    formData.append('category', values.category);
    formData.append('discount', values.discount);
    formData.append('description', values.description);
    formData.append('brand', values.brand);
    Array.from(values.files).forEach(file => {
      formData.append('files', file);
    });
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm(true);
    addProductMutation.mutate(formData);
  };

  return (
    <div>
      <Navbar/>
      <div className='flex'>
      <div className="h-full fixed">
        <Sidebar />
      </div>
      <div className="ml-64 w-screen max-h-full bg-adminDashborad p-8">
        <h1 className="text-start font-bold text-2xl mb-6">Product Information</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {formik => (
            <Form className="mx-auto px-6 py-8 text-start border border-gray-300 w-96 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Product Name
                </label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter product Name"
                  className="w-full p-2 border border-neutral-400 rounded-md"
                />
                <ErrorMessage name="name" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                  Product Price
                </label>
                <Field
                  name="price"
                  type="number"
                  placeholder="Enter product price"
                  className="w-full p-2 border border-neutral-400 rounded-md"
                />
                <ErrorMessage name="price" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                  Product Category
                </label>
                <Field
                  name="category"
                  type="text"
                  placeholder="Enter product Category"
                  className="w-full p-2 border border-neutral-400 rounded-md"
                />
                <ErrorMessage name="category" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="discount" className="block text-gray-700 font-medium mb-2">
                  Product Discount %
                </label>
                <Field
                  name="discount"
                  type="number"
                  placeholder="Enter product Discount"
                  className="w-full p-2 border border-neutral-400 rounded-md"
                />
                {/* <ErrorMessage name="discount" component="div" className="text-red-600" /> */}
              </div>
              <div className="mb-4">
                <label htmlFor="brand" className="block text-gray-700 font-medium mb-2">
                  Brand Name
                </label>
                <Field
                  name="brand"
                  type="text"
                  placeholder="Enter product Category"
                  className="w-full p-2 border border-neutral-400 rounded-md"
                />
                <ErrorMessage name="brand" component="div" className="text-red-600" />
              </div>
              <div className="mb-6">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                  Product Description
                </label>
                <Field
                  name="description"
                  as="textarea"
                  placeholder="Enter product Description"
                  className="w-full p-2 border border-neutral-400 rounded-md"
                />
                <ErrorMessage name="description" component="div" className="text-red-600" />
              </div>
              <div className="mb-6">
                <label htmlFor="files" className="block text-gray-700 font-medium mb-2">
                  Product Images
                </label>
                <input
                  name="files"
                  type="file"
                  multiple
                  className="w-full p-2 border border-neutral-400 rounded-md"
                  onChange={(event) => handleFileChange(event, formik.setFieldValue)}
                />
                <ErrorMessage name="files" component="div" className="text-red-600" />
              </div>
              <button
                disabled={!formik.isValid || formik.isSubmitting}
                type="submit"
                className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
              >
                Add Product
              </button>
            </Form>
          )}
        </Formik>
      </div>
      </div>
    </div>
  );
}

export default AddProduct;
