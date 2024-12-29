import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

function EditProduct() {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    let { id } = useParams()
    const queryClient = useQueryClient()
    const token = localStorage.getItem('token')

    const fetchProductDetail = async () => {
        let response = await fetch(`${API_BASE_URL}/user/detail/${id}`, {
            method: 'GET'
        })
        return response.json()
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ['product', id],
        queryFn: fetchProductDetail,
    })

    const updateProductApi = async (formData) => {
        let response = await fetch(`http://localhost:8000/admin/updateproduct/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
        return response.json()
    }

    const updateProductMutation = useMutation({
        mutationFn: updateProductApi,
        onSuccess: () => {
            queryClient.invalidateQueries(['product', id])
            console.log('Data sent successfully');
        },
        onError: () => {
            console.log('Error in sending data');
        },
    })

    if (isLoading) {
        return <div>Data Loading</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    const initialValues = {
        name: data?.product?.name || '',
        price: data?.product?.price || '',
        category: data?.product?.category || '',
        discount: data?.product?.discount || '',
        description: data?.product?.description || '',
        brand: data?.product?.brand || '',
        files: [],
    }

    const validationSchema = yup.object({
        name: yup.string().required('Required'),
        price: yup.number().required('Required'),
        category: yup.string().required('Required'),
        description: yup.string().required('Required'),
    })

    const handleFileChange = (event, setFieldValue) => {
        setFieldValue('files', event.currentTarget.files)
    }

    const onSubmit = (values, onSubmitProps) => {
        const formData = new FormData()
        formData.append('name', values.name)
        formData.append('price', values.price)
        formData.append('category', values.category)
        formData.append('discount', values.discount)
        formData.append('description', values.description)
        formData.append('brand', values.brand)
        Array.from(values.files).forEach(file => {
            formData.append('files', file)
        })
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm(true)
        updateProductMutation.mutate(formData)
    }

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
                        </div>
                        <div className="mb-4">
                            <label htmlFor="brand" className="block text-gray-700 font-medium mb-2">
                                Brand Name
                            </label>
                            <Field
                                name="brand"
                                type="text"
                                placeholder="Enter product Brand"
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
                            Update Product
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default EditProduct
