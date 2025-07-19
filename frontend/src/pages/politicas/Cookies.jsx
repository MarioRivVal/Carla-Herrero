const Cookies = () => {
  return (
    <section className="policy-section">
      <h2>Política de Cookies</h2>

      <h3>Protocolo para la obtención del consentimiento expreso</h3>

      <p>
        El usuario acepta la instalación de las cookies a través de la pulsación
        de un botón tipo “Acepto”, “Consiento” o similares. Las cookies solo se
        instalarán tras la aceptación explícita por parte del usuario.
      </p>

      <p>
        Utilizamos cookies propias y de terceros para realizar el análisis de la
        navegación de los usuarios y mejorar nuestros servicios. Al pulsar{" "}
        <strong>Acepto</strong> consiente dichas cookies.
      </p>

      <h3>¿Qué son las cookies?</h3>
      <p>
        Una cookie es un pequeño archivo de texto que se almacena en su
        navegador al visitar nuestra página web y guarda información sobre su
        navegación. Algunas cookies son esenciales para el funcionamiento de la
        web, otras requieren consentimiento.
      </p>

      <h3>Tipos de cookies</h3>
      <ul>
        <li>
          <strong>Cookies técnicas:</strong> necesarias para el funcionamiento
          básico de la web.
        </li>
        <li>
          <strong>Cookies de personalización:</strong> permiten recordar
          preferencias como idioma o región.
        </li>
        <li>
          <strong>Cookies de análisis:</strong> recogen información sobre el
          comportamiento del usuario para mejorar nuestros servicios.
        </li>
        <li>
          <strong>Cookies de publicidad:</strong> almacenan datos para mostrar
          anuncios personalizados.
        </li>
      </ul>

      <h3>¿Qué cookies usamos?</h3>
      <p>Actualmente, utilizamos las siguientes cookies:</p>
      <table className="cookies-table">
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Tipo</th>
            <th>Propósito</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Analytics</td>
            <td>De terceros</td>
            <td>
              Recoge datos anónimos de navegación para análisis estadístico.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Gestión de cookies</h3>
      <p>
        Puede configurar su navegador para aceptar o rechazar cookies, así como
        eliminar las ya instaladas. El proceso varía según el navegador.
      </p>

      <ul>
        <li>
          <strong>Chrome:</strong> Configuración{" >"} Privacidad {">"} Cookies
        </li>
        <li>
          <strong>Firefox:</strong> Opciones {">"} Privacidad
        </li>
        <li>
          <strong>Safari:</strong> Preferencias {">"} Privacidad
        </li>
        <li>
          <strong>Edge/Explorer:</strong> Configuración {">"} Privacidad y
          seguridad
        </li>
      </ul>

      <h3>Transferencia de datos a terceros países</h3>
      <p>
        Puede informarse de las transferencias a terceros países realizadas por
        los terceros identificados en esta política en sus correspondientes
        políticas.
      </p>

      <h3>Validez del consentimiento</h3>
      <p>
        El consentimiento se conservará un máximo de 24 meses. Una vez vencido
        este plazo, se solicitará nuevamente.
      </p>

      <h3>Derechos del usuario</h3>
      <p>
        Puede obtener más información sobre el tratamiento de sus datos
        personales y cómo ejercer sus derechos consultando nuestra Política de
        Privacidad
      </p>
    </section>
  );
};

export default Cookies;
