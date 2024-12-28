//Add product Api
const token = localStorage.getItem('token')
export const AddProductApi = async (formData)=>{
    const response = await fetch('http://localhost:8000/admin/addProduct',{
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