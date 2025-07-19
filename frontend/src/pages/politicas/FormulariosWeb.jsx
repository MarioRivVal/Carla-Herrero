const FormulariosWeb = () => {
  return (
    <section className="policy-section">
      <h2>Política de Formularios Web</h2>

      <p>
        Para cumplir plenamente con la Ley Orgánica de Protección de Datos
        (LOPD) y el Reglamento General de Protección de Datos (RGPD), en todo
        formulario donde se recojan datos personales, debe incorporarse una
        casilla de verificación (“check”) que no esté marcada por defecto y que
        incluya un enlace a la política de privacidad.
      </p>

      <h3>Ejemplo de aviso legal en formularios:</h3>
      <pre>[ ] Acepto la Política de Privacidad</pre>

      <p>
        No se debe permitir el envío del formulario si esta casilla no ha sido
        marcada por el usuario.
      </p>

      <h3>Tratamiento de datos personales</h3>
      <p>
        De acuerdo con la legislación vigente en materia de Protección de Datos
        de Carácter Personal (RGPD y LOPDGDD), se informa que los datos
        personales proporcionados a través del formulario serán tratados por:
      </p>
      <ul>
        <li>
          <strong>Responsable:</strong> CARLA FERNÁNDEZ HERRERO
        </li>
        <li>
          <strong>Finalidad:</strong> Gestionar la solicitud del usuario y
          enviarle información más detallada.
        </li>
        <li>
          <strong>Base legal:</strong> Consentimiento explícito del interesado
          mediante la aceptación expresa de la política de privacidad.
        </li>
      </ul>

      <p>
        El usuario declara haber leído y aceptado la{" "}
        <strong>política de privacidad</strong> de CARLA FERNÁNDEZ HERRERO.
      </p>
    </section>
  );
};

export default FormulariosWeb;
