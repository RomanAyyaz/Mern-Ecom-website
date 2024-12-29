const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
//Add product Api
const token = localStorage.getItem('token')
export const AddProductApi = async (formData)=>{
    const response = await fetch(`${API_BASE_URL}/admin/addProduct`,{
        method:'POST',
        headers: {
            'Authorization': `Bearer ${token}`
          },
        body:formData
    })
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
}