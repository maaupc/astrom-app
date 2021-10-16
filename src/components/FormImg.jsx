// import axios from 'axios';
import React from 'react';
const FormImagen=({ setImage })=>{
            const handleChange= async (e) => {
                const imagen = e.target.files[0];
                const file= await getBase64(imagen);
                setImage(file);
                console.log(file)
            };
            function getBase64(imagen) {
                  return new Promise((resolve, reject) => {
                      const reader = new FileReader();
                      reader.addEventListener('load', () => resolve(reader.result));
                      reader.readAsDataURL(imagen);
                  })
              };
             
            return (
                  <div className="text-center mt-2">
                   <input
                            id="file-input"
                            className="d-none"
                            accept="image/png, image/jpeg"
                            type="file"
                            onChange={handleChange}
      
                        />
                </div>
            );
        };

export default FormImagen ;