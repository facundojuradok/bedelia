import React from 'react';

function InfoUner() {
    return (
        <section className="container sobre_la_facultad">
            <div className="sobre_la_facultad_info">
                <h3>La Facultad</h3>
                <br />
                <p>La Facultad de Ciencias de la Administración de la UNER es una
                    institución comprometida con la formación de profesionales
                    en el área de la administración, con una visión innovadora y
                    transformadora. Su misión es generar conocimientos y
                    soluciones en beneficio de la sociedad, formando líderes
                    responsables y éticos. Sus valores incluyen la excelencia
                    académica, la equidad, la responsabilidad social y la
                    sustentabilidad.</p>
            </div>
            <div className="facultad_video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/u0sAcYVYOrc?controls=0"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            </div>
        </section>
    );
}

export default InfoUner;
