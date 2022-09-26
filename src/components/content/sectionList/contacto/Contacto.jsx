import React from 'react'
import Swal from 'sweetalert2'
import './contactoStyles.scss'

export const Contacto = () => {


  const submit = (form) =>{

    let msgEmpty = false;
    let mail = {
      servicio: form.servicio.value,
      nombre: form.nombre.value,
      telefono : form.telefono.value,
      email : form.email.value,
      notas : form.notas.value
    }

    Object.entries(mail).forEach(([key, val]) => {
      if (val === ''){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debe completar todos los campos',
     
        })
        msgEmpty = true;
      }      
    }); 

   

    if (!msgEmpty){
        if (!mail.email.includes('@')){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Direccion de mail incorrecta',
       
          })
        } else{   
          const post = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mail)
          }
     
         fetch('https://const-mail.glitch.me',post)
              .then(response => response.text())
              .then(json =>{
                if (json === 'Mail enviado'){
                  Swal.fire({
                    icon: 'success',
                    title: 'Mensaje enviado. Nos comunicaremos con usted a la brevedad',
                  })
                } else {
                  Swal.fire('Hubo un problema en el envio del mensaje')  
                }
                
              })
          }
    }     
  }
//d-flex align-items-center justify-content-center


  return (
    <div className='contactoContainer' id='seccionContacto'>
      <div className=''>
      <h2>Contacto</h2>
          <div id="carouselExampleIndicators" className="carousel slide"  data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
               <p>Quieres saber como podemos colaborar?</p>
            </div>
            <div className="carousel-item">
               <p>Hacemos un cafe virtual?</p>
            </div>
            <div className="carousel-item">
               <p>Escribenos y cuentanos que necesitas</p>
            </div>
          </div>       
        </div>
      </div>  
      <div>
        <form className="d-flex flex-column" onSubmit={ev => {
            ev.preventDefault();
            submit(ev.target)
        }}>
          <label for="servicio">Que servicio te interesa?</label>
            <select name="servicio">
              <option value="investigacion">Investigación</option>
              <option value="branding">Branding</option>
              <option value="comunicacion">Comunicación y contenido</option>
              <option value="innovacion">Innovación</option>
              <option value="transformacion">Transformación</option>
            </select>
          <label for="nombre">Nombre: </label>
            <input type='text' name='nombre' placeholder='Nombre' autoComplete='off'>  
            </input>
            <label for="telefono">Telefono:</label>
            <input type='text' name='telefono' placeholder='Telefono' autoComplete='off'>  
            </input>
            <label for="email">Email:</label>
            <input type='text' name='email' placeholder='Email' autoComplete='off'>  
            </input>
            <label for="notas">Notas:</label>
            <input type='text' name='notas' placeholder='Notas' autoComplete='off'>  
            </input>
            <button type="submit"> Enviar </button>
        </form>
      </div>
    </div>
  )
}
