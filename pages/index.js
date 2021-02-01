import Layout from '../components/layout';
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="intro">
        <div className="login">
          <h2>PLATAFORMA EDUCATIVA LATINOAMÉRICA</h2>
          <img src="images/intro-mapei.jpg" alt="" title="" />
          <h3>WEBINARS EN CONCRETO</h3>
          <form>
            <p>INGRESAR A SU CUENTA</p>
            <div>
              <input type="email" class="form-control" placeholder="Nombre de usuario" />
            </div>
            <div>
              <input type="password" class="form-control" placeholder="Contraseña" />
            </div>
            <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
              <a class="btn btn-primary float-right">ENTRAR</a>
            </Link>
          </form>
          <div align="center">
            <img src="images/logo-imcyc.svg" alt="" title="" style={{width: '120px', margin: '10px'}} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
