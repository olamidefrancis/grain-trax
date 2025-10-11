
const API_URL = 'https://api.graintrax.com';


async function submitContactus(formData,navigate,showToastMessage) {
  
  try {
    let response = await fetch(`${API_URL}/contactus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      console.log(Error)
      throw new Error(`Server error: ${response.status}`);
      
    }

    let data = await response.json();
    if(data){
      
      showToastMessage();
      setTimeout(() => {
            navigate("/");
          }, 4000);
    }
    console.log( data);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}


export default submitContactus;
