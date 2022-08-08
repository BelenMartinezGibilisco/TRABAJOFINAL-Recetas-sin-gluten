import React from "react";
import "../styles/components/pages/ContactoPage.css";

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <form action="" method="" class="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </p>
          <p>
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div className="datos">
        <h2>Otras vías de comunicación</h2>
        <p>
          También puedes contactarse con nosotros enviándonos un mail o visitando nuestras redes sociales
        </p>
        <ul>
          <li>Email: maicitosfundacion@gmail.com</li>
          <li>Instagram: MaicitosFundacion</li>
          <li>Facebook: MaicitosFundacion</li>
          
        </ul>
      </div>
    </main>
    );
}

export default ContactoPage;