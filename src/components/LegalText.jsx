import React from "react";

/**
 * AvisoLegal_PoliticaPrivacidad.jsx
 * Componentes listos para usar en una app React + Tailwind.
 * - Exporta por defecto <LegalPages /> que sirve como página con navegación entre Aviso Legal y Política de Privacidad.
 * - Sustituye los valores de `siteInfo` por los de tu empresa/cliente antes de publicar.
 *
 * Instrucciones de uso:
 * 1. Copia este archivo a tu proyecto React (por ejemplo: src/pages/LegalPages.jsx).
 * 2. Asegúrate de tener Tailwind configurado en tu proyecto.
 * 3. Importa y usa <LegalPages /> en tu router o añade enlaces directos.
 */

const siteInfo = {
  siteName: "Fitomanager",
  owner: "Martín Agüera Bitaubé",
  nif: "32069249G",
  address: "Padre ruiz Candil 23, Jerez de la Frontera, Cádiz",
  email: "fitomanager@gmail.com",
  phone: "+34 630 45 78 30",
  registration: "",
  effectiveDate: "21 de octubre de 2025",
};

function Section({ title, children }) {
  return (
    <section className="bg-white/80 dark:bg-slate-900/60 p-6 rounded-2xl shadow-sm mb-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="prose prose-sm max-w-none dark:prose-invert">{children}</div>
    </section>
  );
}

export function AvisoLegal({ info = siteInfo }) {
  return (
    <div className="p-6 md:p-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold manuscrito text-center">Aviso Legal</h1>
        <p className="text-sm text-slate-600 mt-2">Información legal del titular del sitio web.</p>
      </div>

      <Section title="Identificación del titular">
        <p>
          El sitio web <strong>{info.siteName}</strong> es titularidad de <strong>{info.owner}</strong> (NIF: <strong>{info.nif}</strong>), con
          domicilio en <strong>{info.address}</strong>.
        </p>
        <p>Correo electrónico de contacto: <a href={`mailto:${info.email}`}>{info.email}</a>.</p>
        <p>Teléfono de contacto: {info.phone}.</p>
      </Section>

      <Section title="Objeto y aceptación de las condiciones">
        <p>
          El presente Aviso Legal regula el uso del sitio web y los servicios que en él se prestan. El acceso y/o uso del sitio atribuye la
          condición de Usuario y supone la aceptación de todas las condiciones incluidas en este Aviso Legal.
        </p>
      </Section>

      <Section title="Propiedad intelectual">
        <p>
          Todos los contenidos del sitio (textos, imágenes, diseños, código, bases de datos, etc.) son titularidad del titular o de terceros
          que han autorizado su uso. Queda prohibida la reproducción total o parcial sin autorización expresa.
        </p>
      </Section>

      <Section title="Responsabilidad">
        <p>
          El titular no se responsabiliza de los daños que puedan derivarse del acceso, uso o mal uso de la información contenida en el
          sitio, cuando procedan de causas ajenas al titular.
        </p>
      </Section>

      <Section title="Enlaces a terceros (links)">
        <p>
          El sitio puede incluir enlaces a páginas de terceros. El titular no controla ni asume responsabilidad por los contenidos o
          servicios ofrecidos en dichos sitios.
        </p>
      </Section>

      <Section title="Modificaciones">
        <p>
          El titular se reserva la facultad de modificar en cualquier momento la presentación, configuración y localización del contenido
          del sitio web, así como las presentes condiciones.
        </p>
      </Section>

      <footer className="text-sm text-slate-500 mt-4">Última actualización: {info.effectiveDate}</footer>
    </div>
  );
}

export function PoliticaPrivacidad({ info = siteInfo }) {
  return (
    <div className="p-6 md:p-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold manuscrito text-center">Política de Privacidad</h1>
        <p className="text-sm text-slate-600 mt-2">Protección de datos personales conforme al RGPD y la LOPDGDD.</p>
      </div>

      <Section title="Responsable del tratamiento">
        <p>
          Responsable: <strong>{info.owner}</strong> — NIF: <strong>{info.nif}</strong> — Domicilio: <strong>{info.address}</strong>.
        </p>
        <p>Contacto de privacidad: <a href={`mailto:${info.email}`}>{info.email}</a>.</p>
      </Section>

      <Section title="Finalidades del tratamiento">
        <p>Tratamos los datos para las siguientes finalidades, entre otras:</p>
        <ul>
          
          <li>Mejorar el servicio mediante analítica web (con consentimiento cuando sea necesario).</li>
        </ul>
      </Section>

      <Section title="Legitimación del tratamiento">
        <p>
          La base legal para el tratamiento será, según los casos, el consentimiento del interesado, la ejecución de un contrato, el
          cumplimiento de una obligación legal o el interés legítimo del responsable.
        </p>
      </Section>

      <Section title="Conservación de los datos">
        <p>
          Conservaremos los datos únicamente durante el tiempo necesario para cumplir la finalidades para las que se recabaron y para
          determinar las posibles responsabilidades que se pudieran derivar de la finalidad.
        </p>
      </Section>

      <Section title="Destinatarios y transferencias internacionales">
        <p>
          No se cederán datos a terceros salvo obligación legal o cuando sea necesario para la prestación del servicio (p. ej. pasarelas
          de pago, plataformas de envío). Si existieran transferencias internacionales se indicaría expresamente y se tomarían garantías
          adecuadas (cláusulas tipo UE, etc.).
        </p>
      </Section>

      <Section title="Derechos de los interesados">
        <p>
          Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad mediante
          solicitud dirigida al correo <a href={`mailto:${info.email}`}>{info.email}</a>. Si no estuvieras conforme, puedes presentar una
          reclamación ante la AEPD (www.aepd.es).
        </p>
      </Section>

      <Section title="Medidas de seguridad">
        <p>
          Se aplicarán las medidas técnicas y organizativas apropiadas para garantizar la seguridad de los datos de carácter personal y
          evitar su alteración, pérdida o tratamiento no autorizado.
        </p>
      </Section>

      <Section title="Cambios en la política">
        <p>
          Esta Política de Privacidad puede ser actualizada. Se indicará la fecha de la última actualización en la parte inferior.
        </p>
      </Section>

      <footer className="text-sm text-slate-500 mt-4">Última actualización: {info.effectiveDate}</footer>
    </div>
  );
}

export default function LegalPages({ info = siteInfo }) {
  const [tab, setTab] = React.useState("aviso");

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <nav className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">{info.siteName} — Legal</h2>
            <p className="text-sm text-slate-500">{info.owner} • NIF: {info.nif}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setTab("aviso")}
              className={`px-3 py-2 rounded-2xl text-sm font-medium border ${tab === "aviso" ? "bg-white shadow" : "bg-transparent"}`}>
              Aviso Legal
            </button>
            <button
              onClick={() => setTab("politica")}
              className={`px-3 py-2 rounded-2xl text-sm font-medium border ${tab === "politica" ? "bg-white shadow" : "bg-transparent"}`}>
              Política de Privacidad
            </button>
          </div>
        </nav>

        <div className="bg-muted-200/40 p-4 rounded-2xl">
          {tab === "aviso" ? <AvisoLegal info={info} /> : <PoliticaPrivacidad info={info} />}
        </div>

        <div className="mt-6 text-sm text-slate-500">
          <p>Recomendación: revisa estos textos con tu asesor legal y adáptalos a la actividad concreta de tu web (comercio electrónico, 
          tratamiento de datos especiales, transferencia internacional, etc.).</p>
        </div>
      </div>
    </main>
  );
}
