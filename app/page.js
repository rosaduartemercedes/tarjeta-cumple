import Countdown from "@/components/Countdown";
import Formulario from "@/components/Formulario";

export const metadata = {

  metadataBase: new URL('https://cumple-xv-pili.vercel.app/'),


  title: "| Te invito a mi cumple",
  description: "Cumple de XV.",
  keywords: ["quince años", "cumpleaños"],
  openGraph: {
    title: "| Te invito a mi cumple",
    description: "Cumple de XV.",
    images: [{ url: "/fondocatafinal.jpg" }], // Imagen que aparecerá al compartir el link
  },
};

export default function Home() {
  return (
 <main 
      // Explicación de clases clave:
      // 1. bg-[url('/foto-mobile.jpg')] -> Carga la foto vertical por defecto (celulares).
      // 2. md:bg-[url('/foto-desktop.jpg')] -> En pantallas grandes (computadoras), cambia la foto a la horizontal.
      // 3. justify-end md:justify-center -> Abajo en el celu (para no tapar la cara), centrado en la compu.
      className="relative min-h-screen w-full flex flex-col items-center justify-end p-4 pb-12 md:justify-center bg-cover bg-center bg-no-repeat bg-[url('/fondocata2.jpg')] md:bg-[url('/fondocata4.jpg')]"
    >
      <div className="absolute inset-0 bg-neutral-950/10 z-0"></div>

      {/* Al estar abajo, le reducimos un toque el gap para que no sea gigante */}
      <div className="relative z-10 w-full max-w-sm bg-black/55 backdrop-blur-md p-5 rounded-3xl border border-white/10 shadow-2xl flex flex-col gap-5 text-white">


     {/* Contenedor Principal */}
  
  {/* Encabezado con la información de fecha y hora agregada */}
  <header className="text-center space-y-2">
    <span className="text-[10px] uppercase tracking-[0.35em] font-black bg-white text-black px-2 py-0.5 rounded-sm inline-block">
      FIESTA EXCLUSIVA
    </span>
    <h1 className="text-3xl font-black uppercase tracking-tighter text-white drop-shadow-md">
      ¡TE INVITO A MI CUMPLE!
    </h1>
    
    {/* ACÁ AGREGAMOS LA FECHA Y HORA (Estilo Urbano/Técnico) */}
    <div className="pt-1">
      <p className="text-sm font-black tracking-[0.15em] text-white uppercase">
        SÁBADO 05 DE DICIEMBRE
      </p>
      <p className="text-xs font-bold tracking-[0.2em] text-neutral-400 mt-0.5">
        A LAS 22:00 HS
      </p>
    </div>

    {/* Línea divisoria sutil para separar la info del cronómetro */}
    <hr className="border-white/10 my-2 w-1/4 mx-auto" />

    <p className="text-[11px] font-medium tracking-[0.1em] text-neutral-300 uppercase">
      Falta muy poco para la fiesta:
    </p>
  </header>

  {/* Bloque del Reloj */}
  <section className="bg-white/5 border border-white/5 p-4 rounded-2xl">
    <Countdown />
  </section>

  {/* Bloque del Formulario */}
  <section>
    <Formulario />
  </section>

</div>
   
    </main>
  );
}