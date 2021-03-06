import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CustomButton from '../components/customButton';
import DropBoxImage from '../components/dropBoxImage';

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found | Pagina não encontrada" />
      <div className="container page404">
        <div className="row">
         
          <div class="col">
            <h1>Francamente! Poxa!</h1>
            <p>
              Você encontrou uma página inválida, vazia ou com conteúdo inválido
              em nosso site. Isso é triste, muito triste.
            </p>
            <CustomButton label="Ir para Home Page" url="/"/>
          </div>
          <div class="col">
            <DropBoxImage src="https://www.dropbox.com/s/hk65jdebol0e73y/Asset%202.png?dl=0" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
