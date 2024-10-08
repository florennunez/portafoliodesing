import React from 'react';
import img from '../assets/portadamobile.png';

function DownloadButton() {
  const handleDownload = () => {
    const pdfUrl = '/miportafolio/public/Curriculum_FlorenciaNunez2024.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Curriculum_FlorenciaNunez2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase realative overflow-hidden" onClick={handleDownload}>
      Descargar Curriculum
    </button>
  );
}

const Sobremi = () => {
  return (
    <div id="Sobremi" className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img data-aos="fade-down" src={img} width={290} height={290} className="rounded border-2 p-1 border-fuchsia-500 img_glow" alt="" />
      <div data-aos="fade-right" className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h1 className="text-[52px] font-Semibold mb-4 leading-normal text-fuchsia-500 uppercase">Sobre mi</h1>
        <p data-aos="fade-left">Actualmente, trabajo en una secretaría, donde me encargo de tomar requerimientos y proponer ideas para aplicaciones internas. Al mismo tiempo, realizo trabajos freelance que me permiten explorar mi pasión por el diseño y la tecnología.
        Soy muy dada a la maquetación y me especializo en la creación de interfaces de usuario (UI), buscando siempre un equilibrio entre funcionalidad y estética. Mi experiencia en lenguajes de programación como JavaScript me permite transformar ideas en soluciones prácticas. La combinación de mi capacidad de análisis y mi inquietud creativa me impulsa a seguir mejorando en cada proyecto que realizo.
        </p>
        <div className='flex mt-8 gap-2'>
          <div className='flx item-center justify-center'>
            <div className='flex space-x-2'>
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Sobremi;
